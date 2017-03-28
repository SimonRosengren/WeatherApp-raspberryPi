const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //Nödvändigt?
const MongoClient = require('mongodb').MongoClient
const port = 80;
MongoClient.connect('mongodb://simon:simon@ds041526.mlab.com:41526/testtempdb', function(err, database){
    if (err) return console.log(err)
    
    app.listen(port, function(){
         console.log(`Listening to port ${port}`);
    })
    db = database
})
app.get('/', function(req, res){
    res.sendFile(__dirname + '/weatherHTML.html');
})
app.get('/stylesheet.css', function(req, res){
    res.sendFile(__dirname + ('/stylesheet.css'))
})
app.get('/databaseScript.js', function(req, res){
    res.sendFile(__dirname + ('/databaseScript.js'))
})
app.post('/quotes', function(req, res){
    db.collection('temperatures').save(req.body, function(err, result){
        if (err) return console.log(err)

        console.log('saved to database');
        res.redirect('/');
    })
})
app.use(bodyParser.urlencoded({extended : true}))
app.post('/temperatures', function(req, res){
    db.collection('temperatures').save(req.body, function(err, result){
        if (err) return console.log(err)

        console.log('IT WORKED!');
        res.redirect('/');
    })
})

