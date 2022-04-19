const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://ridhi:ridhi13@cluster0.dh3hp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

//example of global middleware using this when we hit anyone api terminal show ip,date,time,api path
app.use(
    function(req,res,next){
        console.log(moment().format("YYYY-MM-DD hh:mm:ss")+","+req.ip+","+req.path);
        next();
    }
   
)
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
