const express = require("express");
const indexRouter = require("./routes/index-router");
const app = express();
require("dotenv").config();
const path = require("node:path");
const messageRouter = require("./routes/message-router");

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/message", messageRouter);
app.use("/", indexRouter);
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
});

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Mini Messageboard listening on port ${PORT}`);
});
