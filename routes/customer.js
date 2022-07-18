const express = require("express");
const { getRentals, getRentalCount } = require("../services/customer.dal");
const router = express.Router();
router.use(express.static("public"));
const Joi = require("joi");

router.get("/", async (req, res) => {
  res.render("customer");
});

// setting up the post to receive data back from the forum submit and pass it into the service functions
router.post("/", async (req, res) => {
  let rental = await getRentals(req.body);
  let rentalCount = await getRentalCount(req.body);
  // checks to make sure there is data and directs the user to a norecord page if there is a error
  if (rental === 0 || rentalCount === 0) {
    res.render("norecord");
  } else {
    DEBUG && console.log(req.body);
    res.render("customer", { rental, rentalCount });
  }
});

module.exports = router;
