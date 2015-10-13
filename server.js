var express = require('express')
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/static'));
app.use(express.static('./node_modules'));

app.listen(8080, function() {
    console.log('listening');
})

app.use(function(req, res) {
    res.render('pages/ageCheckPage');
});
