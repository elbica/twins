const mongoose = require("mongoose");

const ProgressReportSchema = mongoose.Schema({
  type: String,
  employee: {
    name: String,
    job: String,
    privilage: String,
  },
  // ???
});

const ProgressReport = mongoose.model("Report", ProgressReportSchema);

module.exports = ProgressReport;
