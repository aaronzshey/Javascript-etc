//https://buttercms.com/blog/web-scraping-with-nodejs-and-cheerio
const cheerio = require("cheerio");
const axios = require("axios");
let a = "https://music.apple.com/us/album/all-the-way-over/1492516293";
axios
  .get(a)
  .then(response => {
    const $ = cheerio.load(response.data);
    const songTitleInput = $("span.product-header__title");
    const songTitle = songTitleInput[0].children[0].data
    console.log(`Song Title: ${songTitle}`)
    const releaseDateInput = $("span.link-list__item__date");
    const releaseDate = releaseDateInput[0].children[0].data
    console.log(`Release Date: ${releaseDate}`)

  })
  .catch(function(error) {
    console.log(error);
  });
