const express = require( 'express' );

const app = express(); 
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.use('/', routes);

// app.use(function(req,res,next){
//     console.log('hola')   
//     next();
// })

// app.use('/fama', function(req,res,next){
//     res.render( 'index', {title: 'Hall of Fame', people: people} ); // f(x) que pasa index.html a Nunjucks
//     next();
// })


app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views', {noCache: true}); // apunta a nunjucks al directorio correcto para los templates

// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.listen('3000')



