const fs = require('fs');
const path = require('path');
const DB_PATH = path.join(__dirname, '../db/users.json');
const updateDB = (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data), () => {});

class UsersStorage {
  constructor() {
    this.data = JSON.parse(fs.readFileSync(DB_PATH, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }));
    this.data = Array.isArray(this.data) ? this.data : [];
  }

  find(id = undefined, email, password) {
    if (id) {
      return this.data.find((item) => item.id === id); 
    } else if (email && password) {
      return this.data.find((item) => item.email === email && item.password === password);
    } else {
      return this.data;
    }
    return this.data;
  }

  save(data) {
    try {
      if (Array.isArray(data)) {
        this.data = data;
      } else {
        this.data = [...this.data, data];
      }
      updateDB(this.data);
    } catch (err) {
      console.error(err);
    }
    return data;
  }

  update(id, data) {
    const {name, email, password, status} = data;
    const userIndex = this.data.findIndex((obj) => obj.id === id);

    if (userIndex === -1) {
      return null;
    }
    const {name: nameCurrent, email: emailCurrent, password: passwordCurrent, status: statusCurrent} = this.data[userIndex];

    this.data[userIndex] = {
      ...this.data[userIndex],
      name: name || nameCurrent,
      email: email || emailCurrent,
      password: password || passwordCurrent,
      status: status || statusCurrent
    };

    updateDB(this.data);
    return this.data[userIndex];
  }
}

module.exports = UsersStorage;