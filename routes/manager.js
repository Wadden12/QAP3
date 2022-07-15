const express = require("express");
const { getLateRentals } = require("../services/manager.dal");
const router = express.Router();
router.use(express.static("public"));

router.get("/", async (req, res) => {
  res.render("manager");
});
// setting up the post to receive data back from the forum submit and pass it into the service functions
router.post("/", async (req, res) => {
  let lateRental = await getLateRentals(req.body);
  if (lateRental.length === 0) res.render("norecord");
  else {
    DEBUGG = console.log(`Late Renal request ${req.body}`);
    res.render("manager", { lateRental });
  }
});

module.exports = router;
