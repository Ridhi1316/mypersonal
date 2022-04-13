const { count } = require("console")
const authorModel=require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const allBooks = async function(req,res){
    const authDet = await authorModel.find({authorName:"Chetan Bhagat"})
    const id = authDet[0].author_id
    const bookName = await bookModel.find({author_id:id}).select({bookName:1})
    res.send({msg:bookName})
}

const updateBkPrice = async function(req,res){
    const bookDet = await bookModel.find({bookName:"Two states"})
    const id = bookDet[0].author_id
    const authName = await authorModel.find({author_id:id}).select({authorName:1,_id:0})
    const bkName = bookDet[0].bookName
    const updatePrice = await bookModel.findOneAndUpdate({bookName:bkName},{price:100},{new:true}).select({price:1,_id:0})
    res.send({msg:authName,updatePrice})
}

const authName = async function(req,res){
    const booksId= await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    const id = booksId.map(trav =>trav.author_id)
    let temp=[]
    for(let i=0;i<id.length;i++){
        let a=id[1]
        const author = await authorModel.find({author_id:a}).select({authorName:1,_id:0})
        temp.push(author)
    }
    const authorName = temp.flat()
    res.send({msg:authorName})
}








module.exports.createBook= createBook
module.exports.createAuthor=createAuthor
module.exports.allBooks=allBooks
module.exports.updateBkPrice=updateBkPrice
module.exports.authName=authName