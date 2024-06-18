const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  firstName: {
    type: String,
    required: [true, "firstName is required"],
  },
  lastName: {
    type: String,
    required: [true, "lastName is required"],
  },
  contact: {
    type: String,
    required: [true, "contact is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  website: {
    type: String,
  },
  address: {
    type: String,
    required: [true, "address is require"],
  },
  specialization: {
    type: String,
    required: [true, "specialization is require"],
  },
  experience: {
    type: String,
    required: [true, "experience is require"],
  },
  feesPerConsaltation: {
    type: String,
    required: [true, "fees is require"],
  },
  timing: {
    type: Object,
    required: [true, "work time is require"],
  },
},{timestamps:true});

const DoctorModel = mongoose.model("users", doctorSchema);

module.exports = DoctorModel;
