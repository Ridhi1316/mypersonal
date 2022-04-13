const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook  )

router.get("/bookList", BookController.bookList)

router.post("/getBookInYear",BookController.getBooksInYear)

router.get("/getParticularBook",BookController.getParticularBook)

router.get("/getRandomBooks",BookController.getRandomBooks)

router.get("/getXINRBooks",BookController.getXINRBooks)


module.exports = router;