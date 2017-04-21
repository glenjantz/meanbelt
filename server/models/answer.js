
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var AnswerSchema = new mongoose.Schema({
  answer: {type: String,
         required: [true, "must give an answer at least 5 characters"],
         minlength: 5},
  details: {type: String,},

  user: {type: String,
         required: [true, "user must exist for an answer"]},
  likecount: {type: Number,
              default: 0},
  _question: {type: Schema.Types.ObjectId,
              ref: 'Question'}
},{timestamps: true});

mongoose.model("Answer", AnswerSchema);
