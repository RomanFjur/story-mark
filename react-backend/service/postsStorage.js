const fs = require('fs');
const path = require('path');
const DB_PATH = path.join(__dirname, '../db/posts.json');
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
      const posts = this.data.filter((item) => item.id === id);
      return posts; 
    } else {
      return this.data;
    }
  }

  save(data) {
    try {
      this.data = [...this.data, data];
      updateDB(this.data);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = PostsStorage;