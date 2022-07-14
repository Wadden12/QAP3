const dal = require("./postdb");

let getRentals = async (body) => {
  let { email } = body;
  console.log("post attempted");
  DEBUG && console.log(email);
  const sql = `SELECT full_name, title FROM vw_customer_rentals_last_12_months
    WHERE email = '${email}'`;
  let res = await dal.query(sql);
  DEBUG && console.log(res.rows);
  return res.rows;
};

module.exports = {
  getRentals,
};
