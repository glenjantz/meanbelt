
var mongoose = require('mongoose');

var Question = mongoose.model('Question');
console.log('questions controller');

module.exports = {

  index: function(req,res){
    Question.find({}, function(err, users){
      if(err){
        console.log('something went wrong finding the friends', err);
        res.json(err)
      }else{
        res.json(users);
      }
    });
  },

  create: function(req,res){
    console.log('this is the req.body', req.body);
    var question = new Question({
      question: req.body.question,
      description: req.body.description
    })
    question.save(function(err, question){
      if(err){
        console.log('err saving the question', err)
        res.json(err)
      }else{
        res.json(question)
      }
    })
  },

  show: function(req, res){
    Question.findOne({_id: req.params.id}, function(err, question){
      if(err){
        console.log('something went wrong finding the person');
        res.json(err)
      }else{
        res.json(question);
      }
    });
  },
  show: function(req, res){
    Question.findOne({_id: req.params.id}).populate('answers').exec(function(err, question){
      if(err){
        console.log('something went wrong finding the question', err)
      }else{
        res.json(question)
      }
    })
  }

}
