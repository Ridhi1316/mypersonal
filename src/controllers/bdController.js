const batch = require("../models/batch")
const batchModel= require("../models/batch")
const developerModel= require("../models/developer")
 //1
const createBatch= async function (req, res) {
    let data = req.body
    let batchCreated = await batchModel.create(data)
    res.send({data: batchCreated})
}

//2
const createDeveloper= async function (req, res) {
    let data = req.body
    let developerCreated = await developerModel.create(data)
    res.send({data: developerCreated})
}

//3
const getdeveloper= async function (req, res) {
    let getData = await developerModel.find({gender:"female",percentage:{$gte:70}}).populate('batch')
    res.send({data: getData})
}

//4
const developers= async function (req, res) {
    let data=req.query.percentage
    let program=req.query.program
    let getData2 = await batchModel.find({name:program}).select({_id:1})
    let getData = await developerModel.find({$and:
       [ {batch:{$in:getData2}},{percentage:{$gte:data}} ]
    }
    ).populate('batch') //.select({_id:1})
  // console.log(getData)
    res.send({msg: getData})
}

module.exports.createBatch=createBatch
module.exports.createDeveloper=createDeveloper
module.exports.getdeveloper=getdeveloper
module.exports.developers=developers
