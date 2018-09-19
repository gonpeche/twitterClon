const express = require( 'express' );
const router = express.Router(); // Centraliza las rutas y se las pasa a la App
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets } );
});

module.exports = router;