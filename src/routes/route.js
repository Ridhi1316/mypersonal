const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/allcandidate', function (req, res) {
    let arr=["Hi","How","are","you"]
    console.log('------------------')
    //console.log(req)
    //console.log('------------------')
    //console.log('These are the request query parameters: ', req.query)
    res.send(arr)
});

router.get('/Candidate', function (req, res) {
    let a=req.query.count
    let arr=["Hi","How","are","you"]
    let result=arr.slice(0,a)
    res.send(result)
});


module.exports = router;

// adding this comment for no reason
//GET /all-candidates
//Write a get api that returns a list of candidate names

//GET /candidates?count=3
//Write a get api that returns a list of candidates with size equal to the count value recieved in the query param.

//COnsider that the count value is greater than 0 and less or equal to 10.

//The request you will send should have a url like this - http://localhost:3000/candidates?count=3
