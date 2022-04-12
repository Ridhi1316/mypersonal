const express = require('express');
const router = express.Router();
const BooksModel= require("../models/BooksModel.js")
const BooksController= require("../controllers/BooksController.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BooksController.createBooks)

router.get("/getBooksData", BooksController.getBooksData)

module.exports = router;
