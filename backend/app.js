var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("morgan");
const passport = require("./auth/local");
const session = require("express-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var dishesRouter = require("./routes/dishes");
// var grandmasRouter = require("./routes/grandmas");
var labelsRouter = require("./routes/labels");
var cuisinesRouter = require("./routes/cuisines");
var ordersRouter = require("./routes/orders");
var filterRouter = require("./routes/filter");
var imageRouter = require("./routes/images");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser("never gonna give u up"));

app.use(
  session({
    secret: "never gonna give u up",
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use("/users", usersRouter);
app.use("/upload", imageRouter);
app.use("/labels", labelsRouter);
app.use("/dishes", dishesRouter);
app.use("/cuisines", cuisinesRouter);
app.use("/orders", ordersRouter);
app.use("/filter", filterRouter);
app.use("*", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
