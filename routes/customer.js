const express = require("express");
const { getRentals } = require("../services/customer.dal");
const router = express.Router();
router.use(express.static("public"));

router.get("/", async (req, res) => {
  res.render("customer");
});

router.post("/", async (req, res) => {
  let rental = await getRentals(req.body);
  DEBUG && console.log(req.body);
  res.render("customer", { rental });
});

module.exports = router;
