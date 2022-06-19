//import query
//create table - pass an sql string with create table command
//pass the string into query in an async function createTable
//call the function

var query = require("../index.js");

const sqlString = `CREATE TABLE IF NOT EXISTS newsforce (
  id INTEGER GENERATED ALWAYS AS IDENTITY,
  author VARCHAR(100),
  headline VARCHAR(200),
  description VARCHAR(500),
  url VARCHAR(300),
  imgUrl VARCHAR(300),
  imgAlt VARCHAR(200),
  publishedAt VARCHAR(200)
)`;

async function createTable() {
  const response = await query(sqlString);
  console.log("created Table", response.command);
}

createTable();
