const express = require("express");
var app = express();
app.use(express.static("static"));
const db = require('./services/db');

// Set PUG as templating engine
app.set('view engine', 'pug');
app.set('views', './views');

app.get("/", function(req, res) {
    res.send("Hello world!");
});

app.get("/db_test", function(req, res) {
    sql = 'select * from test_table';
    db.query(sql).then(results => {
        console.log(results);
        res.send(results)
    });
});

app.get("/users", function(req, res) {
    sql = 'select * from test_table';
    db.query(sql).then(results => {
        res.render('users', {users: results});
    });
});

app.get("/goodbye", function(req, res) {
    res.send("Goodbye world!");
});

app.get("/hello/:name", function(req, res) {
    console.log(req.params);
    res.send("Hello " + req.params.name);
});

app.listen(3000,function(){
    console.log(`Server running at http://127.0.0.1:3000/`);
});