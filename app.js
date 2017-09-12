var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var expressValidator = require('express-validator')
var expressSession = require('express-session')
var index = require('./routes/index');
var mysql = require('mysql');
// var users = require('./routes/users');

const db = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : '',
  database  : 'nodeMySql',
});
//connect
db.connect((err) => {
  if(err){
    throw err;
  }
  console.log('My sql connect')
});

var app = express();

app.get('/get_db',(req,res) => {
  let sql = 'CREATE DATABASE nodeMySql';
  db.query(sql,(err,result) => {
    if(err){
      throw err;
    }
    console.log(result);
    res.send('databse Created...')
  })
})
// view engine setup
app.engine('hbs',hbs({extname : 'hbs', defaultLayouts:'layout',layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(expressSession({secret:'max',saveUnintialize:false, resave:false }));
app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
