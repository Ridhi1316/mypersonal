const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String, 
        required:true,
        },
    authorName: String, 
    tags: [String],
    
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year:{
        type: Number, 
        default:2010,
    },
    totalPage:Number,
    stockAvail:{type:Boolean,default:true}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
