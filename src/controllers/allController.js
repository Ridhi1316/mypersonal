const bookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")
const PublisherModel = require("../models/publisher")

//5
const updating = async function(req,res){
    let up = await bookModel.updateMany({publisher:"625c14fcefacd6b199d990e4"},{$set:{isHardCover:true}},{new:true,upsert:true})
    res.send({msg:up})
}
const penguin = async function(req,res){
    let up = await bookModel.updateMany({publisher:"61951bfa4d9fe0d34da86344"},{$set:{isHardCover:true}},{new:true,upsert:true})
    res.send({msg:up})
}
const convertPrice = async function(req,res){
    let oldPrice=req.body.price
    let newPrice = oldPrice+10
    let up = await bookModel.find({ratings:{$gt:3.5}}).select({ratings:1,_id:0}).update({price:newPrice})
    res.send({msg:up})
}

//3
const createBook= async function (req, res) {
    let book = req.body
    let check = await AuthorModel.findById(book.author)//finds author _id in authormodel
    let check2 = await PublisherModel.findById(book.publisher)//finds publisher _id in publishermodel
    if(!book.author){
        res.send("Your request is wrong!!Send author id to check results...")
    }
    else if(!book.publisher){
        res.send("Your request is wrong!!Send publisher id to check results...")
    }
    else if(!check){
        res.send("No author present...")
    }
    else if(!check2){
        res.send("No publisher present...")
    }
    else {
    let bookCreated = await bookModel.create(book)
    console.log("Book Created")
    res.send({data: bookCreated})
}
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}
//4
const getBooksWithAthPubDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})

}
//1
const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}
//2
const createPublisher = async function (req, res) {
    let data = req.body
    let publisherCreated = await PublisherModel.create(data)
    res.send({data: publisherCreated})
}

module.exports.createBook=createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAthPubDetails = getBooksWithAthPubDetails
module.exports.createAuthor= createAuthor
module.exports.createPublisher=createPublisher
module.exports.updating=updating
module.exports.convertPrice=convertPrice
module.exports.penguin=penguin