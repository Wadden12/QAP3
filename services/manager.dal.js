const dal = require("./postdb");

// service function to get all the customers that have not returned movies
let getLateRentals = async (body) => {
  let { username } = body;
  console.log("Get Late Rentals Post Attempted");
  DEBUG && console.log(`username ${username}`);
  const sql = `SELECT store_id, customer, username, manager, movie, address, city, email FROM vw_rentals_not_returned
  WHERE username = '${username}'`;
  let res = await dal.query(sql);
  DEBUG && console.log(`Get Late Rental rows ${res.rows}`);
  return res.rows;
};

module.exports = {
  getLateRentals,
};
