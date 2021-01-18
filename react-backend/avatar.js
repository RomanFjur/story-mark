class AvatarGenerator {
  static getNewAvatar(length = 12) {

    const avaliableAvatars = [
      'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg', 
      'https://i.pinimg.com/originals/11/ab/14/11ab147894a7d2ce866ff88a4aa63655.jpg', 
      'https://cs8.pikabu.ru/post_img/2016/02/04/7/145458292112119207.jpg', 
      'https://www.meme-arsenal.com/memes/8c4efb9bdbe32514cd7b64ec5e2e1fd1.jpg', 
      'https://handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids1handcraftguide.com__0.jpg?itok=CiUYaUmE', 
      'https://nn.by/photos/z_2019_08/anime1-xqswd.png', 
      'https://klike.net/uploads/posts/2019-05/1556705582_1.jpg', 
      'https://strana.ua/img/article/2625/70_main.jpeg', 
      'https://wonder-day.com/wp-content/uploads/2020/03/wonder-day-peely-fortnite-35-768x432.jpg', 
      'https://www.clever-media.ru/upload/resize_cache/iblock/e18/800_600_090cf9bfc02c81ba0a02cc940d6445018/e182549ed40479cfd34e626ccf34bbe7.jpg', 
      'http://pikstok.ru/images/images/1528372927887.jpg', 
      'https://misea.ru/images/u/pages/155/galaxy-11098.jpg'];
    
    const avatarNumber = Math.floor(Math.random() * avaliableAvatars.length);

    return avaliableAvatars[avatarNumber];
  }
}

module.exports = AvatarGenerator;