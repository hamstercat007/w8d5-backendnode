var pg = require("pg");
require("dotenv").config();

//export the function query with the pool function and database env
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URI,
  ssl: { rejectUnauthorized: false },
});

function query(text, params, callback) {
  return pool.query(text, params, callback);
}

//test
// console.log(await query("SELECT NOW()"));

module.exports = query;
