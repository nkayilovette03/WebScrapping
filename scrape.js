const request = require("request");
const cheerio = require("cheerio");

request(
  "https://my-portfolio-eight-sigma.vercel.app/",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const siteName = $(".container");

      //   console.log(siteName.html());
      //   console.log(siteName.text());
      //   const output = siteName.find("h6").text();
      //   const output = siteName.children("h6").next().text();

      //   const output = siteName.children("h6").parent().text();

      $("li a").each((i, el) => {
        const item = $(el).text();
        const link = $(el).attr("href");

        console.log(link);
      });
    }
  }
);
