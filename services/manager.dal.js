const dal = require("./postdb");

let getLateRentals = async (body) => {
  let { username } = body;
  console.log("Get Late Rentals Post Attempted");
  DEBUG && console.log(username);
  const sql = `SELECT store_id, customer, username, manager, movie, address, city FROM vw_rentals_not_returned
  WHERE username = '${username}'`;
  let res = await dal.query(sql);
  DEBUG && console.log();
};

module.exports = {
  getLateRentals,
};
