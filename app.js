const express = require( 'express' );
const app = express(); 
const nunjuncks = require('nunjucks');

app.use(function(req,res,next){
    console.log('hola')   
    next();
})

app.use('/special*', function(req,res,next){
    res.send('<h1> Lugar especial </h1>') 
    next();
})

app.listen('3000')



