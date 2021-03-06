const dal = require("./postdb");

// service functions to get data from the DB

// gets the rentals for last 12 months
let getRentals = async (body) => {
  let { email } = body;
  console.log(" Get Rentals Post Attempted");
  DEBUG && console.log(email);
  const sql = `SELECT full_name, title, rental_date  FROM vw_customer_rentals_last_12_months
    WHERE email = '${email}'`;
  let res = await dal.query(sql);
  DEBUG && console.log(res.rows);
  return res.rows;
};

// counts the total movies rented
let getRentalCount = async (body) => {
  let { email } = body;
  console.log("post attempted");
  DEBUG && console.log(`email ${email}`);
  const sql = `SELECT full_name, COUNT(title) AS count FROM vw_customer_rentals_last_12_months
  WHERE email = '${email}'
  GROUP by full_name`;
  let res = await dal.query(sql);
  DEBUG && console.log(res.rows);
  return res.rows;
};

module.exports = {
  getRentals,
  getRentalCount,
};
