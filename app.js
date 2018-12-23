var express = require('express');
var path = require('path'); //untuk path atau static page
var mongoose = require('mongoose');

//initial app
var app = express();

//koneksi database
mongoose.connect('mongodb://localhost/ecommerce');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('Sudah konek db');
});

//view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');   

// setup public folder
app.use(express.static(path.join(__dirname,'public')));

//index page
app.get('/',function(req, res){
    res.send('ini halaman index');
});

var port = 3000;
app.listen(port, function(){
    console.log('server berjalan pada port ' + port)
});