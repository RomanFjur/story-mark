const fs = require('fs');
const path = require('path');
const DB_PATH = path.join(__dirname, '../db/posts.json');
const updateDB = (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data), () => {});

let dataBase = JSON.parse(fs.readFileSync(DB_PATH, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}));
dataBase = Array.isArray(dataBase) ? dataBase : [];

class PostsStorage {
  static find(id) {
    if (id) {
      const posts = dataBase.filter((item) => item.id === id);
      return posts; 
    } else {
      return dataBase;
    }
  }

  static save(data) {
    try {
      dataBase = [...dataBase, data];
      updateDB(dataBase);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = PostsStorage;