var query = require("../index.js");

//create drop table command
//pass this in async function
const sqlString = `DROP TABLE newsforce;`;

async function dropTable() {
  const result = await query(sqlString);
  console.log(result.command);
}

dropTable();
