const express = require("express");
const { getLateRentals } = require("../services/manager.dal");
const router = express.Router();
router.use(express.static("public"));

router.get("/", async (req, res) => {
  res.render("manager");
});

router.post("/", async (req, res) => {
  let lateRental = await getLateRentals(req.body);
  DEBUGG = console.log(`Late Renal request ${req.body}`);
  res.render("manager", { lateRental });
});

module.exports = router;
