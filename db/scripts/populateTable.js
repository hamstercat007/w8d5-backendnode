var query = require("../index.js");
var axios = require("axios");

function getHeadlines() {
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`;
  axios
    .get(url)
    .then(function (response) {
      // handle success
      const articles = response.data.articles;
      populateTable(articles);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

//create a function to cycle through each article .
//saveArticle function - save the articles to the database.

function populateTable(articles) {
  articles.map(saveArticle);
}

async function saveArticle(article) {
  const result = await query(
    `INSERT INTO newsforce (
  author,
  headline,
  description,
  url,
  imgUrl,
  imgAlt,
  publishedAt
    ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *; `,
    [
      article.author,
      article.title,
      article.description,
      article.url,
      article.urlToImage,
      article.url,
      article.publishedAt,
    ]
  );
  console.log("----------------------------");
  console.log(result.rows[0].headline);
  console.log("----------------------------");
  // console.log(result.rows[0].headline);
}

//postgres is used with lots of data, and always returns an array. To access the real data, rows, 0.
//map through each object, call another function and give it all the articles, and inside the function,
//map through each article and insert it into the database.

getHeadlines();
