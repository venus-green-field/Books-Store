var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, index: {unique: true} },
  password: String,
})

var User = mongoose.model('User', userSchema);


User.prototype.comparePassword = function (attemptedPassword, callback) {

  bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
    if(err) {
      callback(err, null);

    }
    else {

      callback(null, isMatch);
    }
  });
}

userSchema.pre('save', function(next) {
       
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this)
    .then(function(hash) {
      this.password = hash;
      next();
    });
});

//Roqyia
exports.loginUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username })
    .exec(function(err, user) {
      if (!user) {
        res.redirect('/login');
      } else {
        User.comparePassword(password, user.password, function(err, match) {
          if (match) {
            User.createSession(req, res, user);
          } else {
            res.redirect('/index.html');
          }
        });
      }
    });
};
//mohamed
  exports.signupUser = function(req,res) {
      var username = req.body.username ;
      var password = req.body.password ;

    User.findOne({username : username})
    .exec(function(err,user) {
      if(!user) {
          var newUser = new user({
            username : username ,
            password : password
          });
          newUser.save(function(err,newUser) {
            if(err) {
                res.status(500).send(error);
            }else{
              User.createSession = function(req,res,newUser) {
                return req.session.regenerate(function() {
                req.session.user = newUser ;
                redirect("./") ;
              })
            }
          }
        });
      }else{
        console.log("Account already exists") ;
        redirect("./login")
      }
    })
  };


module.exports = User;