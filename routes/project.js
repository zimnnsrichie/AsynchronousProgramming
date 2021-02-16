const express = require("express");
const router = express.Router();
const fs = require("fs");

const NO_DATA = {};

router.route("/:id").get((req, res) => {
  if(req.params.id == "") return NO_DATA;
  
  const data = fs.readFileSync("./data/projects.json");

  let prj = JSON.parse(data);
  let foundItem = prj.find((item) => { return item.projectID == req.params.id; });
  res.send(foundItem == undefined ? {} : foundItem);
});

module.exports = router;
