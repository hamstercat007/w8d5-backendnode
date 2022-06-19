var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.get("/", (req, res) => {
//   res.send("<h1>Growlsters</h1>");
// });

app.use("/", (req, res, next) => {
  req.message = "This message is sad part 1";
  next();
});

app.use("/", (req, res, next) => {
  console.log(`req.message + "part 2"`);
  next();
});

app.get("/hello", (req, res) => {
  res.send("<h1>Greetings stranger</h1>");
});
// app.listen(3000, () => {
//   console.log("The application is listening on port 3000")
// })

app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});



module.exports = app;
