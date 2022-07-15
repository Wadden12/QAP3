// Author: Mike Wadden
// Date: July 13,2022
// QAP 3
// to launch the app you can use npm start

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
global.DEBUG = false;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

const customerRouter = require("./routes/customer");
const managerRouter = require("./routes/manager");
const ownerRouter = require("./routes/owner");
app.get("/", async (req, res) => {
  res.render("index");
});

app.use("/customer", customerRouter);
app.use("/manager", managerRouter);
app.use("/owner", ownerRouter);

app.use((req, res) => {
  res.status(404).render("404");
});
app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
