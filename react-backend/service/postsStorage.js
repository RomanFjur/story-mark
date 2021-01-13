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
      return this.data.find((item) => item.id === id); 
    } else {
      return this.data;
    }
  }

  save(id, data) {
    try {
      if (this.data.find((item) => item.id === id)) {
        let posts = this.data.find((item) => item.id === id);
        posts.posts = [...posts.posts, data];
      } else {
        this.data = [...this.data, {id: id, posts: [data]}];
      }
      updateDB(this.data);
    } catch (err) {
      console.error(err);
    }
    return this.data.find((item) => item.id === id);
  }
}

module.exports = PostsStorage;