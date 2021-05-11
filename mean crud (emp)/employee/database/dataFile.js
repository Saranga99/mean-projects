var mongoose = require("mongoose");
//connetion URL
var db = "mongodb://localhost:27017/employeeDetails";

//connect method
mongoose.connect(db, (error) => {
  if (error) {
    conssole.log(error);
  }
});

var Schema = mongoose.Schema;
var Employee_Schema = new Schema({
  EmployeeName: String,
  Designation: String,
  Projects: String,
  Skills: String,
});

var Employee = mongoose.model("employees", Employee_Schema);

module.export = Employee;
