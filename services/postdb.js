const Pool = require("pg").Pool;
const pool = new Pool({
  user: "mike",
  host: "localhost",
  database: "dvdrental",
  password: "database",
  port: 5432,
});
module.exports = pool;
