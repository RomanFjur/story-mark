const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const app = express();

let http = require("http");

// Create the http server 
const server = require('http').createServer(app); 
let socketio = require("socket.io");

// Create the Socket IO server on  
// the top of http server 
const io = socketio(server); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

function usersGenerator(start, end, number) {
  const users = [];
  for (let i = start; i < end; i++) {
    users.push(Math.floor(Math.random() * number + 1));
  }
  return users;
}

io.on('connection', client => {
  console.log('connected');
  client.on('subscribeToUsers', interval => {
    console.log('client is subscribing to recieving data');
    setInterval(() => {
      client.emit('giveMeUsers', usersGenerator(0, 30, 30));
    }, interval);
  });
  client.on('subscribeToPosts', interval => {
    console.log('client is subscribing to recieving posts');
    setInterval(() => {
      client.emit('giveMePosts', usersGenerator(0, 3, 100));
    }, interval);
  });
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

module.exports = {app: app, server: server};
