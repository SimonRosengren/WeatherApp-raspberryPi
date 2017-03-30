const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const database = require('./db');

const port = 80;
const app = express();

// Middlewares
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.urlencoded({extended : true}))

app.post('/temperatures', function(req, res){
    database.save('temperatures', req.body, function(err, result) {
        if (err) return console.log(err)

        console.log('IT WORKED!');
        res.json({ success:true });
        res.end();
    })
})

database.connect(function(error){
    if(error){
        console.log(error);
        return;
    }

    app.listen(port, function(){
        console.log(`Listening to port ${port}`);
    })
})