console.log("future routes");

var questions = require('../controllers/questions');
var answers = require('../controllers/answers');

module.exports = function(app){
  app.get('/', function(req, res) {
    res.render('index')
  });
  app.get('/questions', questions.index);
  app.get('/questions/:id', questions.show);
  app.post('/question', questions.create);
  app.post('/answer/:id', answers.create);
  app.post('/answerlike', answers.addlike);
};
