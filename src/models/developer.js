const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema( {
    name: String,
    gender:{
        type:String,enum:["male","female","other"],
    },
    percentage:Number,
    batch:{
        type:ObjectId,
        ref:"batches"
    }
}, { timestamps: true });

module.exports = mongoose.model('developers', developerSchema)



/*{ 
_id: ObjectId("61951bfa4d9fe0d34da86829"),
		name:"Sabiha Khan",
		gender:”female”,
		percentage:75,
batch: ObjectId("65321bfa4d9fe0d34da86829")
	}
*/ 