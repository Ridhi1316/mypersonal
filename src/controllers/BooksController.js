const BooksModel= require("../models/BooksModel")

const createBooks= async function (req, res) {
    let data= req.body
    let savedData= await BooksModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BooksModel.find()
    res.send({msg: allBooks})
}

module.exports.createBooks= createBooks
module.exports.getBooksData= getBooksData