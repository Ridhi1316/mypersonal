const req = require("express/lib/request")
const UserModel= require("../models/userModel")
const productModel = require("../models/productModel")
const OrderModel = require("../models/orderModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const createProduct= async function (req, res) {
    let data= req.body
    let savedData= await productModel.create(data)
    res.send({msg: savedData})
}

const createOrder = async function (req, res) {
    let data = req.body;
    let uId = await UserModel.findById(req.body.userId)
    let pId = await productModel.findById(req.body.productId)
    let str = ""
    let saveData
    if (!data.userId)
        res.send({ msg: "User ID is required" })
    else if (!uId)
        res.send({ msg: "Enter valid User ID" })
    else if (!data.productId)
        res.send({ msg: "Product ID is required" })
    else if (!pId)
        res.send({ msg: "Enter valid Product ID" })
    else {
        saveData = await OrderModel.create(data);
        if (req.headers["isfreeappuser"] === "true") {
            await OrderModel.updateOne({ userId: data.userId }, { $set: { amount: 0 } },{new:true})
        }
        else {
            let pPrice = pId.price;
            if (uId.balance > pPrice){
                await UserModel.updateOne({ _id: data.userId }, { $inc: { balance: -pPrice } },{new:true})
                await OrderModel.updateOne({ _id:saveData._id }, { $set: { amount: pPrice } },{new:true})
                res.send({ msg: saveData });
            }
            else res.send({msg:"user doesn't have enough balance"})
        }
         
    } 
}

module.exports.createProduct=createProduct
module.exports.createUser=createUser
module.exports.createOrder=createOrder