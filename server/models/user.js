//require mongoose to set model
var mongoose = require('mongoose');
//make the schema
var UserSchema = new mongoose.Schema({
  fname: {type: String,
         required: true},
  lname: {type: String,
          required: true},
  bday: {type: Date,
         required: true}
},{timestamps: true});
//set the schema
mongoose.model("User", UserSchema);
