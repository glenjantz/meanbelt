//require mongoose to use the schema
var mongoose = require('mongoose');
//use the schema
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
console.log('questions controller');
//export db queries and actions
module.exports = {

  addlike: function(req,res){
    Answer.findOne({_id: req.body.id}, function(err, answer){
      if(err){
        console.log('something went wrong finding the answer for the like', err)
        res.json(err)
      }else{
        answer.likecount +=1
        answer.save(function(err, savedanswer){
          if(err){
            console.log('something went wrong saving the like', err)
            res.json(err)
          }else{
            res.json(savedanswer)
          }
        })
      }
    })
  },
  create: function(req,res){
    console.log('this is the req.body', req.body);
    var newanswer = new Answer({
      answer: req.body.answer,
      details: req.body.details,
      user: req.body.user,
      _question: req.params.id
    })
    Question.findOne({_id: req.params.id}, function(err, question){
      if(err){
        console.log('something went wrong finding the q for the answer', err)
        res.json(err)
      }else{
        question.answers.push(newanswer)
        question.save(function(err, savedquestion){
          if(err){
            console.log('something went wrong saving the answer to the q', err)
            res.json(err)
          }else{
            newanswer.save(function(err, savedanswer){
              if(err){
                console.log('something went wrong saving the answer', err)
                res.json(err)
              }else{
                res.json(savedanswer);
              }
            })
          }
        })
      }
    })
  },

}
