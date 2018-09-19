const express = require( 'express' );
const router = express.Router(); // Centraliza las rutas y se las pasa a la App
const tweetBank = require('../tweetBank');

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
    res.render( 'index', { tweets: list } );
});


module.exports = router;