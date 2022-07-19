// Author: Mike Wadden
// Date: July 13,2022
// QAP 3
// to launch the app you can use npm start
//task 1
/// Sample emails for the customer entry
// mary.smith@sakilacustomer.org
// patricia.johnson@sakilacustomer.org
//linda.williams@sakilacustomer.org

//task 2
//USERNAME MIKE
//PASSWORD 8cb2237d0679ca88db6464eac60da96345513964

// USERNAME Jon
// PASSWORD 8cb2237d0679ca88db6464eac60da96345513964

//task 3 is done with params so no input needed

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
