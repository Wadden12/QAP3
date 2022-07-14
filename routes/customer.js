const express = require("express");
const { getRentals, getRentalCount } = require("../services/customer.dal");
const router = express.Router();
router.use(express.static("public"));

router.get("/", async (req, res) => {
  res.render("customer");
});

router.post("/", async (req, res) => {
  let rental = await getRentals(req.body);
  let rentalCount = await getRentalCount(req.body);
  DEBUG && console.log(req.body);
  res.render("customer", { rental, rentalCount });
});

module.exports = router;
