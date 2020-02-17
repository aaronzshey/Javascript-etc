//https://buttercms.com/blog/web-scraping-with-nodejs-and-cheerio
const cheerio = require("cheerio");
const axios = require("axios");
let a = "https://music.apple.com/us/album/all-the-way-over/1492516293";
axios
  .get(a)
  .then(response => {
    const $ = cheerio.load(response.data);
    //const songTitle = $("span.product-header__title");
    //console.log(songTitle[0].children[0].data)
    const releaseDate = $("span.link-list__item__date");
    console.log(releaseDate[0].children[0].data)
    
  })
  .catch(function(error) {
    console.log(error);
  });
