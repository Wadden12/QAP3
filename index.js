// Author: Mike Wadden
// Date: July 13,2022
// QAP 3

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
global.DEBUG = true;

const customerRouter = require("./routes/customer");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.render("index");
});

app.use("/customer", customerRouter);

app.use((req, res) => {
  res.status(404).render("404");
});
app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
