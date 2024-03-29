// https://mongoosejs.com/
const mongoose = require("mongoose");

const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  name: String,
  level: String,
  position: String,
  present: Boolean,
  color: String,
  startingDate: Date,
  salary: Number,
  desiredSalary: Number,
  employeeCompany: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Company"
  },
  favoriteGames:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Game"
    }
  ],
  kittens:[{
    name:String,
    weight:Number
  }],
  favoriteBrand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FavoriteBrand"
  },
  equipment: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Equipment"
  }],
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
