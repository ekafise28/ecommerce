var express = require('express');
var path = require('path'); //untuk path atau static page

//initial app
var app = express();

//view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

// setup public folder
app.use(express.static(path.join(__dirname,'public')));
//app.use(express.static(path.join(__dirname,'models')));
//app.use(express.static(path.join(__dirname,'views')));
//app.use(express.static(path.join(__dirname,'routes')));

//index page
app.get('/',function(req, res){
    res.send('ini halaman index');
});

var port = 3000;
app.listen(port, function(){
    console.log('server berjalan pada port ' + port)
});
