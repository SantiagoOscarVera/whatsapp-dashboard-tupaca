const notesRouter = require("./notesRouter.js");
const categorysRouter = require("./categorysRouter.js");

const express = require("express");
const app = express();

app.use("/notes", notesRouter);
app.use("/categorys", categorysRouter);

module.exports = app;
