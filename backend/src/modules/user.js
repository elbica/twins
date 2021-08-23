const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  id: String,
  phone: String,
  onProject: {
    id: Schema.Types.ObjectId,
    privileage: Number,
    job: String,
    jobLog: [],
  },
  password: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
