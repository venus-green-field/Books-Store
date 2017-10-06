var express = require('express');
var http=require('http');
var bcrypt=require('bcrypt-nodejs');
var mongoose =require ('mongoose');
var db=require('./database/index');
var books = require('google-books-search');
var bodyParser = require('body-parser');
var Book1=require('./database/model/Book1'); 
var User=require('./database/model/User');
var Review=require('./database/model/Review');
var session=require('express-session'); 
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/client'));
var port=process.env.PORT ||1128;

//this part for user login & signup
//intialize  user session
app.use(session({
  secret:"shhh it's a secret",
  resave:false,
  aveUnintinalized:true
}));
//render the login page
app.get('/login', 
  function(req, res) {
    res.redirect('login.html');
  });
//render the signup page
app.get('/signup', 
  function(req, res) {
    res.redirect('/signup.html');
  });
//this post to handle the sigin up post from the client
app.post('/signup', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
      //check if user is already exsist  
      User.findOne({ username: username })
      .exec(function(err, user) {
        //if the user dosen't exsist 
        if (!user) {
          var newUser = new User({
            username: username,
            password: password
          });
          //save the new user in the database 
          newUser.save(function(err, newUser) {
            if (err) {
              res.send(500, err);
            }
            else {
              createSession(req, res, newUser);
            }
          });
        } 
        else {
          console.log('Account already exists');
          res.redirect('/signup.html');
        } 
      });
    });
//create the user session 
var createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
    console.log( req.session)
    req.session.user = newUser;
    res.redirect('index.html');
  });
};
//comparing the input password to the saved one in the database 
var comparePassword = function (attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
    if(err) {
      callback(err, null);
    }
    else {
      callback(null, isMatch);
    }
  });
}
//handle the login post 
app.post('/login', function(req, res) {
 var username = req.body.username;
 var password = req.body.password;
    //check if the user in the database or not 
    User.findOne({ username: username }).exec(function(err, user) {
     if (!user) {
       res.redirect('/login');
     } else {
       comparePassword(password, function(err, match) {
        if (match) {
          User.createSession(req, res, user);
        } else {
          res.redirect('/login');
        }
      });
     }
   });
  });
//end of user siginup and login handling

//this part for search in google Api
app.post('/search',function (req,res){
  books.search( req.body.token, function(error, results) {
    console.log(req.session)
    if ( ! error ) {
      res.json(results);
    } else {
      console.log(error);
    }
  });
})
//this part is for comment storing and send all the comments to the client 
app.post('/coment',function (req,res){
  review=new Review({bookid:req.body.id,text:req.body.coment});
  review.save(function(err, result){
    if(err){
      res.status(500).send(err);
    } 
  })
  Review.find({bookid:req.body.id}).exec(function(err, data){
    if(err){
      console.log(error);
    }else{
      res.json(data)
    }
    
    })
  })
//this get to send all the books data from the database to the client 
//it will recived in index.html page 
app.get('/init',function (req,res){
  Book1.find({},function(err, result){
    res.json(result)
  })
})
//server creating 
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});



