var express = require('express');
var exphbs = require('express-handlebars');

var app = express();


app.set('views', "./lib/app/views");
app.set('partialsDir', "./lib/app/views/partials");


app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir: './lib/app/views/layouts'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000);