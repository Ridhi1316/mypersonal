let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
//1
let getDistrictById = async function (req, res) {

        try{ 
            let id = req.query.district_id
            let date = req.query.date
            let options = {
                method:'get',
                url:`http://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
    
            }
            let result = await axios(options)
            res.status(200).send({msg:result.data})
    
        }
        catch(err){
            console.log(err)
             res.status(500).send({ msg: err.message })
    
    }
}
//2
let getLondonTemp = async function(req,res){
    try{ 
        let city = req.query.q
     let appid = req.query.appid
     let options = {
         method:'get',
         url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`}
         let result = await axios(options)
       let temp = result.data.main.temp
         
         res.status(200).send({msg:temp})
     }catch(err){
         console.log(err)
         res.status(500).send({ msg: err.message })
     }
 }
 //2-(1)
 let getSortCities = async function(req,res){
    try {

        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

        let selectedCities = []

        for (let i = 0; i < cities.length; i++) {

            let city = ({ city: cities[i] })

            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=6fd818f92f32e853ce85f2750225f569`)

            city.temp = result.data.main.temp

            selectedCities.push(city)
        }
        let sortedResult = selectedCities.sort(function (a, b) { return a.temp - b.temp })

        res.status(200).send({ data: sortedResult, status: true })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
   }
   //3
   let getallMemes = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let result = await axios(options);
        
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
//3-(1)
let createMemeById = async function (req, res) {

    try {
        let text0 = req.query.text0
        let text1 = req.query.text1
        let template_id = req.query.template_id
        let username = req.query.username
        let password = req.query.password
        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?text0=${text0}&text1=${text1}&template_id=${template_id}&username=${username}&password=${password}`

        }
        let result = await axios(options);
        
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



 
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictById=getDistrictById
module.exports.getLondonTemp=getLondonTemp
module.exports.getSortCities=getSortCities
module.exports.getallMemes=getallMemes
module.exports.createMemeById=createMemeById
