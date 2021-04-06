const request = require("request");
const cheerio = require("cheerio");

request(
  "https://my-portfolio-eight-sigma.vercel.app/",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      $(".nav-menu").each((i, el) => {
        const title = $(el).find("li").text().replace(/\s\s+/g, "");
        const link = $(el).find("a").attr("href");
        console.log(title, link);
      });
    }
  }
);
