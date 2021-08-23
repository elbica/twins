const mongoose = require("mongoose");

const ProblemReportSchema = mongoose.Schema({
  type: String,
  employee: {
    id: Schema.Types.ObjectId,
    name: String,
    job: String,
    privilage: String,
  },
  issue: String,
  processCode: Number,
});

const ProblemReport = mongoose.model("Report", ProblemReportSchema);

module.exports = ProblemReportSchema;
