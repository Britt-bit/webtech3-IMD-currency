const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const apiTransactionRouter = require("./routes/api/v1/transaction");
const userRouter = require("./routes/api/v1/user_data");
const myUserRouter = require("./routes/api/v1/my_user_data");
const allUserRouter = require("./routes/api/v1/all_user_data");
const testRouter = require("./routes/api/v1/testController");
const passport = require("./passport/passport");

const config = require("config");
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
mongoose.connect(process.env.dbconn || config.get("Database.conn"), {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use(
	"/api/transaction",
	passport.authenticate("jwt", {
		session: false,
	}),
	apiTransactionRouter
);
app.use("/api/user_data", userRouter);
app.use(
	"/api/my_user_data",
	passport.authenticate("jwt", {
		session: false,
	}),
	myUserRouter
);
app.use(
	"/api/all_user_data",
	passport.authenticate("jwt", {
		session: false,
	}),
	allUserRouter
);

app.use("/api/test", testRouter);

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
