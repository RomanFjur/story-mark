const fs = require('fs');
const DB_PATH = './database/posts.json';
const updateDB = (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data), () => {});

class PostsStorage {
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

  find(id) {
    if (id) {
      return this.data.find((item) => item.id === id); 
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
}

module.exports = PostsStorage;