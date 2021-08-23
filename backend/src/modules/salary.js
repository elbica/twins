const mongoose = require("mongoose");

const SalarySchema = mongoose.Schema({
  employee: {
    id: Schema.Types.ObjectId,
    name: String,
    job: String,
    priviliage: String,
  },
  term: String,
  salaryInfo: {
    total: Number,
    insurence: {
      company: Number,
      personal: Number;
    },
  },
});
