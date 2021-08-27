const mongoose = require("mongoose");

/**
 * @swagger
 * definitions :
 *  User :
 *    type: "object"
 *    description : "유저 생성 위한 모델"
 *    properties :
 *      id:
 *        type : "string"
 *      password:
 *        type : "string"
 *      phone:
 *        type : "string"
 *      address:
 *        type : "string"
 *      onProject:
 *        type: object
 */

const UserSchema = new mongoose.Schema({
  name: String,
  id: String,
  phone: String,
  onProject: {
    id: mongoose.Schema.Types.ObjectId,
    privileage: Number,
    job: String,
    jobLog: [],
  },
  password: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
