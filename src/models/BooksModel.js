const mongoose=require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{
        type: String,
        unique: true,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    category:String,
    year:{
        type:Number,
        enum:[2010,2011,2012,2013,2014]
    }
   
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books

