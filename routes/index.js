const express = require( 'express' );
const router = express.Router(); // Centraliza las rutas y se las pasa a la App
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/tweets/:id', function(req, res) {
    var id = parseInt(req.params.id);
    var list = tweetBank.find( { id: id } );
    res.render( 'index', { tweets: list } );
});


router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find( { name: name } );
    res.render( 'index', { tweets: list, showForm: true, name: name } );
});

// POST /login gets urlencoded bodies
router.post('/login', urlencodedParser, function (req, res) {
    res.send('welcome, ' + req.body.username)
})
  
  // POST /api/users gets JSON bodies
router.post('/api/users', jsonParser, function (req, res) {
// create user in req.body
})

router.post('/tweets', urlencodedParser, function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
  });

module.exports = router;