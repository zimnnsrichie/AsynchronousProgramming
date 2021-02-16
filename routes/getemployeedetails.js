const express = require("express");
const router = express.Router();
const fs = require("fs");
const fetch = require("node-fetch");

router.route("/:id").get((req, res) => {
  fetch("http://localhost:3000/employee/" + req.params.id)
    .then((emp) => emp.json())
    .then((emp) => {
      fetch("http://localhost:3000/project/" + emp.projectID)
        .then((prj) => prj.json())
        .then((prj) => {
          res.status(200).send({
            ...emp,
            ...prj,
          });
        });
    })
    .catch((err) => {
      res.status(200).send({
        err: err,
      });
    });
});

module.exports = router;
