const dal = require("./postdb");

// create a function to get the data by store

let getStore = async (body) => {
  let { store } = body;
  console.log(`Get Store Post Attempted`);
  DEBUGG && console.log(`Store ${store} `);
  const sql = `SELECT  * FROM vw_rentalsales_perstore_byfilm
  WHERE store_id = ${store}
  ORDER BY rental_dollars DESC
  LIMIT 10`;
  let res = await dal.query(sql);
  DEBUG && console.log(`Get Store rows ${res.rows}`);
  return res.rows;
};

module.exports = {
  getStore,
};
