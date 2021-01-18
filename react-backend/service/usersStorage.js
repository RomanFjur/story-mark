const fs = require('fs');
const path = require('path');
const DB_PATH = path.join(__dirname, '../db/users.json');
const updateDB = (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data), () => {});

// singletone

let dataBase = JSON.parse(fs.readFileSync(DB_PATH, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}));
dataBase = Array.isArray(dataBase) ? dataBase : [];

class UsersStorage {
  static find(id, email, password) {
    if (id) {
      return dataBase.find((item) => item.id === id); 
    } else if (email && password) {
      return dataBase.find((item) => item.email === email && item.password === password);
    } else {
      return dataBase;
    }
  }

  static save(data) {
    try {
      if (Array.isArray(data)) {
        dataBase = data;
      } else {
        dataBase = [...dataBase, data];
      }
      updateDB(dataBase);
    } catch (err) {
      console.error(err);
    }
    return dataBase;
  }

  update(id, data) {
    const {name, email, password, status} = data;
    const userIndex = dataBase.findIndex((obj) => obj.id === id);

    if (userIndex === -1) {
      return null;
    }

    const {name: nameCurrent, email: emailCurrent, password: passwordCurrent, status: statusCurrent} = dataBase[userIndex];

    dataBase[userIndex] = {
      ...dataBase[userIndex],
      name: name || nameCurrent,
      email: email || emailCurrent,
      password: password || passwordCurrent,
      status: status || statusCurrent
    };

    updateDB(dataBase);
    return dataBase[userIndex];
  }
}

module.exports = UsersStorage;