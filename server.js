const express = require("express");
const app = express();
const port = 3000;

const employee = require("./routes/employee");
const project = require("./routes/project");
const getemployeedetails = require("./routes/getemployeedetails");

const fs = require("fs");

app.use("/employee", employee);
app.use("/project", project);
app.use("/getemployeedetails", getemployeedetails);

app.all("/", (req, res) => {
  res.status(200).send({
    data: "NULL",
  });
});

app.all("/*", (req, res) => {
  res.status(200).send({
    data: "NULL",
  });
});

app.listen(port, (err) => {
  if (err) throw err;

  console.log("Server listening on port:", port);
});
