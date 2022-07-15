const express = require("express");
const { getStoreById, getStores } = require("../services/owner.dal");
const router = express.Router();
router.use(express.static("public"));

router.get("/", async (req, res) => {
  let stores = await getStores();
  if (stores.length === 0) {
    res.render("norecord");
  } else {
    res.render("owner", { stores });
  }

  //   let stores = [{ store: "test1" }, { store: "test2" }, { store: "test2" }];
  //   res.render("owner", { stores });
});

router.get("/:id", async (req, res) => {
  let store = await getStoreById(req.params.id);
  DEBUG && console.log(`Store by ID ${req.params.id}`);
  if (store.length === 0) {
    res.render("norecord");
  } else res.render("ownerDetails", { store });
});

// router.post("/", async (req, res) => {
//   let store = await getStore(req.body);
//   if (store.length === 0) {
//     res.render("norecord");
//   } else {
//     DEBUGG = console.log(`Get Store request ${req.body}`);
//     res.render("owner", { store });
//   }
// });

module.exports = router;
