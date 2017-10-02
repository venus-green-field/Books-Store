var express = require('express');
var http=require('http');
var bcrypt=require('bcrypt-nodejs');
var mongoose =require ('mongoose');
var db=require('./database/index');
var books = require('google-books-search');
var bodyParser = require('body-parser');
var useragent = require('express-useragent');
var Book=require('./database/model/Book');
var Book1=require('./database/model/Book'); 
var User=require('./database/model/User');
var session=require('express-session'); 
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/client'));
var port=process.env.PORT ||1128;
app.use(session({
  secret:"shhh it's a secret",
  resave:false,
  aveUnintinalized:true
}));

app.get('/login', 
  function(req, res) {
    res.redirect('login.html');
  });
app.get('/signup', 
  function(req, res) {
    res.redirect('/signup.html');
});
app.post('/signup', function(req, res) {
      var username = req.body.username;
      var password = req.body.password;
      console.log(username,password,req.session);
      User.findOne({ username: username })
      .exec(function(err, user) {
        if (!user) {
        
          var newUser = new User({
            username: username,
            password: password
          });
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
var createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
      req.session.user = newUser;
      res.redirect('index.html');
    });
};
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

app.post('/login', function(req, res) {
  
     var username = req.body.username;
    var password = req.body.password;

   User.findOne({ username: username }).exec(function(err, user) {
           if (!user) {
        
  
             res.redirect('/login.html');
       
          } else {
       
       
         comparePassword(password, function(err, match) {
          if (match) {
            User.createSession(req, res, user);
          } else {
            res.redirect('/index.html');
          }
        });
       
    }
   });
});
// books.search('Professional JavaScript for Web Developers', function(error, results) {
//     if ( ! error ) {
//         console.log(results);
//     } else {
//         console.log(error);
//     }
// });

app.post('/search',function (req,res){
  var searchtoken =req.body.token;
    //res.json(searchtoken)
  Book.find({title:searchtoken},function(err, result){
       searchresult=result;
        //console.log(searchresult);
        res.json(result)
       })
    })

	app.get('/init',function (req,res){
	
	Book.find({},function(err, result){
        //console.log(result);
        res.json(result)
        //console.log(result)
        //res.redirect ('index.html')
    })
	// Book.find().exec(function(err, result){
 //       //searchresult=result;

 //       console.log(result[0]);
 //    });
	// res.send(searchresult[0]);
})

var barr=[ {
    title: 'Managerial-and-cost accounting',
    auther: 'Christopher J. Skousen , Larry M. Walther',
    descreption: 'Early portions of this textbook dealt mostly with financial accounting. Financial accounting is concerned with reporting to external parties such as owners, analysts, and creditors. These external users rarely have access to the information that is internal to the organization, nor do they specify the exact information that will be presented. Instead, they must rely on the general reports presented by the company. Therefore, the reporting structure is well defined and standardized. The methods of preparation and the reports presented are governed by rules of various standard-setting organizations. Furthermore, the external users generally see only the summarized or aggregated data for an entity.',
    image: '/images/managerial-and-cost-accounting.jpg',
    path: 'managerial-and-cost-accounting.pdf',
    gener: 'Accounting',
    rating: 0
    },
  {
    title: 'How to Become a Coach',
    auther: 'Ton de Graaf',
    descreption: 'Coaching is one of the fastest growing industries in the world. Everyday new coaches enter the market. Schools, institutes and academies o er coach training programs and consultancy  rms quickly add coaching and o er it to their clients as one of their new key services.',
    image: '/images/how-to-become-a-coach.jpg',
    path: 'how-to-become-a-coach.pdf',
    gener: 'Career managment',
    rating: 0
     },
  { 
    title: 'Good Digital Hygiene',
    auther: 'Dr Eduardo Gelbstein',
    descreption: 'With nearly 50 years experience in the private and public sectors in several countries, Ed has been active in information security through publications, international conferences, workshops and also as an auditor.',
    image: 'good-digital-hygiene.jpg',
    path: '/pdf/good-digital-hygiene.pdf',
    gener: 'IT managment',
    rating: 0
     },
  { 
    title: 'Customer Care',
    auther: 'Frank Atkinson',
    descreption: ' is book has been written to help you become more successful in sales.',
    image: '/images/customer-care.jpg',
    path: '/pdf/customer-care.pdf',
    gener: 'Marketing',
    rating: 0
     },
  { 
    title: 'Personal Confidence & Motivation',
    auther: 'MTD Training',
    descreption: ' is book has been written to help you become more successful in sales.',
    image: '/images/personal-confidence-and-motivation.jpg',
    path: '/pdf/personal-confidence-and-motivation.pdf',
    gener: 'Personal Development',
    rating: 0
     } ];

// Book1.create({
//     title: 'Managerial-and-cost accounting',
//     auther: 'Christopher J. Skousen , Larry M. Walther',
//     descreption: 'Early portions of this textbook dealt mostly with financial accounting. Financial accounting is concerned with reporting to external parties such as owners, analysts, and creditors. These external users rarely have access to the information that is internal to the organization, nor do they specify the exact information that will be presented. Instead, they must rely on the general reports presented by the company. Therefore, the reporting structure is well defined and standardized. The methods of preparation and the reports presented are governed by rules of various standard-setting organizations. Furthermore, the external users generally see only the summarized or aggregated data for an entity.',
//     image: '/images/managerial-and-cost-accounting.jpg',
//     path: 'managerial-and-cost-accounting.pdf',
//     gener: 'Accounting',
//     rating: 0
//     },
//   {
//     title: 'How to Become a Coach',
//     auther: 'Ton de Graaf',
//     descreption: 'Coaching is one of the fastest growing industries in the world. Everyday new coaches enter the market. Schools, institutes and academies o er coach training programs and consultancy  rms quickly add coaching and o er it to their clients as one of their new key services.',
//     image: '/images/how-to-become-a-coach.jpg',
//     path: 'how-to-become-a-coach.pdf',
//     gener: 'Career managment',
//     rating: 0
//      },
//   { 
//     title: 'Good Digital Hygiene',
//     auther: 'Dr Eduardo Gelbstein',
//     descreption: 'With nearly 50 years experience in the private and public sectors in several countries, Ed has been active in information security through publications, international conferences, workshops and also as an auditor.',
//     image: 'good-digital-hygiene.jpg',
//     path: '/pdf/good-digital-hygiene.pdf',
//     gener: 'IT managment',
//     rating: 0
//      },
//   { 
//     title: 'Customer Care',
//     auther: 'Frank Atkinson',
//     descreption: ' is book has been written to help you become more successful in sales.',
//     image: '/images/customer-care.jpg',
//     path: '/pdf/customer-care.pdf',
//     gener: 'Marketing',
//     rating: 0
//      },
//   { 
//     title: 'Personal Confidence & Motivation',
//     auther: 'MTD Training',
//     descreption: ' is book has been written to help you become more successful in sales.',
//     image: '/images/personal-confidence-and-motivation.jpg',
//     path: '/pdf/personal-confidence-and-motivation.pdf',
//     gener: 'Personal Development',
//     rating: 0
//      }, function (err, small) {
//      if (err) return console.error(err);
//   // saved!
// });

 // var book=new Book({title:'Personal Confidence & Motivation',auther:'MTD Training',descreption:' is book has been written to help you become more successful in sales.',image:'/images/personal-confidence-and-motivation.jpg',path:'/pdf/personal-confidence-and-motivation.pdf',gener:'Personal Development',rating:0});
     
       // book.save(function (err, book) {
       //  if (err) return console.error(err);
        
       //     });
      Book1.find().exec(function(err, result){
       console.log(result);
      });
app.listen(port, function() {

	//console.log(Book)
  console.log(`listening on port ${port}`);
   
});


//   title: {type: String, index: {unique: true} },
//   auther: String,
//   descreption: String,
//   image:String,
//   path:String,
//   gener:String,
//   rating:Number
// });