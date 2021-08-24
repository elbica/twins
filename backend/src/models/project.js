const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  name: String,
  employeeList: [Object],
  // employee Object
  /**
   * {
   *    privilage
   *    userID
   *    job
   * }
   */
  machineList: [Object],
  // machine Object
  /**
   * {
   *    machineID
   * }
   */
  usedMaterialList: [Object],
  goalList: [Object],
});

module.exports = ProjectSchema;
