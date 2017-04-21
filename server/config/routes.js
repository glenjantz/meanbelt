console.log("future routes");
////require the friends controller
var users = require('../controllers/users');
//have routes call the properc friends db methods
module.exports = function(app){
  //this line doesn't need to exist
  app.get('/', function(req, res) {
    res.render('index')
  });
  //retrieve all friends
  app.get('/users', users.index);
  //create one friends
  app.post('/users', users.create);
  //update one friend by id
  app.put('/users/:id', users.update);
  //show one friend by id
  app.get('/users/:id', users.show)
  //delete one friend by id
  app.delete('/users/:id', users.deleted)
};
