const { Router } = require("express");
const indexRouter = Router();
const REPSONSE_CODE = require("../response-codes");
const db = require("../db");

indexRouter.get("/", (req, res) => {
    const messages = db.getMessages();

    res.status = REPSONSE_CODE.OK;
    res.render("index", { title: "The Title", messages });
});

indexRouter.get("/new", (req, res) => {
    res.status = REPSONSE_CODE.OK;
    res.render("new", {});
});

indexRouter.post("/new", (req, res) => {
    const newMessage = req.body.newMessage;
    const newName = req.body.newName;
    db.addMessage({ message: newMessage, name: newName, added: new Date() });

    res.redirect("/");
});

module.exports = indexRouter;
