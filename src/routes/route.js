const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});
//1. Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.
router.get('/movies', function(req, res) {
    let ar=['Hell','My','life']
    res.send(ar)
})
//2. Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api
router.get('/movies/:indexNumber', function(req, res) {
    let ar=['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']

    let id=req.params.indexNumber
        res.send(ar[id])
    
});
//3. Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message.
router.get('/movies/:indexNumber', function(req, res) {
 let ar=['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']

    let id=req.params.indexNumber

    if(id<ar.length){
        res.send(ar[id])
    } else{
        res.send('Use Valid Index')
    }
    
});

//Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is 

router.get('/films', function(req, res) {
const ar2= [
{
 id: 1,
 name: "The Shining"
},
 {
 id: 2,
 name: "Incendies"
}, 
{
 id: 3,
 name: "Rang de Basanti"
}, 
{
 id: 4,
 name: "Finding Nemo"
}
]
res.send(ar2);
})

//Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
router.get('/films/:filmid', function(req, res) {
let ar2= [
{
 id: 1,
 name: "The Shining"
},
 {
 id: 2,
 name: "Incendies"
}, 
{
 id: 3,
 name: "Rang de Basanti"
}, 
{
 id: 4,
 name: "Finding Nemo"
}
]
let obj;
let a=req.params.filmid;

for(let i=1; i<ar2.length; i++){
let idx = ar2[i-1]
if(idx>i){
    obj=idx;
} else{
    obj='no movie with this id-${i}'
}
}
res.send(obj)
})





module.exports = router;
// adding this comment for no reason