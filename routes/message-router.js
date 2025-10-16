const REPSONSE_CODE = require("../response-codes");
const { Router } = require("express");
const messageRouter = Router();
const db = require("../db");

messageRouter.get("/:id", async (req, res) => {
    const message = db.getMessage(req.params.id);
    res.status(REPSONSE_CODE.OK).render("message", {
        message: message.message,
        added: message.added,
        name: message.name,
    });
});

module.exports = messageRouter;
