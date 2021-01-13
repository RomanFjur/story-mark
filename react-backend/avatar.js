class AvatarGenerator {
  static getNewAvatar(length = 10) {
    // let newId = '';
    // const avaliableSymbols = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    // for (var i = 0; i < length; i++) {
    //   let randomSymbolIndex = Math.floor(Math.random() * avaliableSymbols.length);
    //   newId = `${newId}${avaliableSymbols[randomSymbolIndex]}`;
    // }
    // return newId;

    const avaliableAvatars = [
      '../../assets/pictures/1.jpg', 
      '../../assets/pictures/2.jpg', 
      '../../assets/pictures/3.jpg', 
      '../../assets/pictures/4.jpg', 
      '../../assets/pictures/5.jpg', 
      '../../assets/pictures/6.jpg', 
      './client/src/assets/pictures/7.jpg', 
      './client/src/assets/pictures/8.jpg', 
      './client/src/assets/pictures/9.jpg', 
      './client/src/assets/pictures/10.jpg', 
      './client/src/assets/pictures/11.jpg', 
      './client/src/assets/pictures/12.jpg', 
      './client/src/assets/pictures/13.jpg', 
      './client/src/assets/pictures/14.jpg', 
      './client/src/assets/pictures/15.jpg', 
      './client/src/assets/pictures/16.jpg', 
      './client/src/assets/pictures/17.jpg', 
      './client/src/assets/pictures/18.jpg', 
      './client/src/assets/pictures/19.jpg', 
      './client/src/assets/pictures/20.jpg'];
    
    const avatarNumber = Math.floor(Math.random() * avaliableAvatars.length);

    console.log(avatarNumber);
    console.log(avaliableAvatars[avatarNumber]);

    return avaliableAvatars[avatarNumber];
  }
}

module.exports = AvatarGenerator;