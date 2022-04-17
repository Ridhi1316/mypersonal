const express = require('express');
const router = express.Router();
const allController= require("../controllers/allController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", allController.createAuthor)

router.post("/createPublisher", allController.createPublisher)

router.post("/createBook", allController.createBook )

router.get("/getBooksData", allController.getBooksData)

router.get("/getBooksWithAthandPubDet", allController.getBooksWithAthPubDetails)

router.put("/updating",allController.updating)

router.put("/updating2",allController.penguin)

router.put("/convertRating",allController.convertPrice)
module.exports = router;