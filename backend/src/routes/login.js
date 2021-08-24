const express = require("express");
const router = express.Router();
const userModel = require("../models/user");

router.post("/", (request, response) => {
  const id = request.body.id;
  const password = request.body.password;

  userModel.findOne({ id: id }).then((result) => {
    console.log(result);
    if (result == undefined) {
      response.send({
        success: false,
      });
    } else if (result.password != password) {
      response.send({
        success: false,
      });
    } else {
      response.send({
        success: true,
      });
    }
  });
});

module.exports = router;
