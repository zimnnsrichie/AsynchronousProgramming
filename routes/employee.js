const express = require("express");
const router = express.Router();
const fs = require("fs");

router.route("/:id").get((req, res) => {
  if(req.params.id == "") return NO_DATA;
  
  const data = fs.readFileSync("./data/employees.json");

  let emp = JSON.parse(data);
  let foundItem = emp.find((item) => { return item.id == req.params.id; });
  res.send(foundItem == undefined ? {} : foundItem);
});

module.exports = router;
