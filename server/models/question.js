
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var QuestionSchema = new mongoose.Schema({
  question: {type: String,
            required: [true, "must give a question"],
            minlength: 10},
  description: {type: String},

  answers: [{type: Schema.Types.ObjectId,
            ref: "Answer"}],
},{timestamps: true});

mongoose.model("Question", QuestionSchema);
