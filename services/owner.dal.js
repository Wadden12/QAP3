const dal = require("./postdb");

// create a function to get the data by store

let getStores = async () => {
  const sql = `SELECT DISTINCT(store_id), store FROM vw_rentalsales_perstore_byfilm`;
  let res = await dal.query(sql);
  DEBUG && console.log(`Get Stores rows ${res.rows}`);
  return res.rows;
};

let getStoreById = async (id) => {
  DEBUG && console.log(`Store ${id} `);
  const sql = `SELECT  * FROM vw_rentalsales_perstore_byfilm
  WHERE store_id = ${id}
  ORDER BY rental_dollars DESC
  LIMIT 10`;
  let res = await dal.query(sql);
  DEBUG && console.log(`Get Store rows ${res.rows}`);
  return res.rows;
};

module.exports = {
  getStoreById,
  getStores,
};
