const cheerio = require("cheerio");
const axios = require("axios");
let a = "https://missfiatlux.tumblr.com/post/189790973620";
axios
  .get(a)
  .then(response => {
    const $ = cheerio.load(response.data);
    const img = $("img");
    console.log(img['0'].attribs.src);
  })
  .catch(function(error) {
    console.log(error);
  });
