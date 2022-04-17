const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const publisherSchema = new mongoose.Schema( {
    name: String,
   headQuarter:String

}, { timestamps: true });


module.exports = mongoose.model('newPublisher', publisherSchema)

/*_id: ObjectId("61951bfa4d9fe0d34da86344"),
name: “Penguin”,
headQuarter: “New Delhi”,
*/