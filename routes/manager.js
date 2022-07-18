const express = require("express");
const { getLateRentals, verifyManager } = require("../services/manager.dal");
const router = express.Router();
router.use(express.static("public"));

router.get("/", async (req, res) => {
  res.render("manager");
});

// setting up the post to receive data back from the forum submit and pass it into the service functions
// router.post("/", async (req, res) => {
//   let lateRental = await getLateRentals(req.body);
//   if (lateRental.length === 0) res.render("norecord");
//   else {
//     DEBUGG = console.log(`Late Rental request ${req.body}`);
//     res.render("manager", { lateRental });
//   }
// });

router.post("/", async (req, res) => {
  let valid = await verifyManager(req.body);
  if (valid === true) {
    let lateRental = await getLateRentals(req.body);
    DEBUG && console.log(lateRental);
    res.render("manager", { lateRental });
  } else if (valid === "Invalid Username") {
    let message = "Invalid Username. Please try again.";
    res.render("manager", { message });
  } else {
    let message = "Invalid Password. Please try again.";
    res.render("manager", { message });
  }
});

module.exports = router;
