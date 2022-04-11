const express = require('express');
const mongoose=require("mongoose")
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://ridhi:ridhi13@cluster0.xaclf.mongodb.net/Ridhi',{
    useNewUrlParser:true
})
    .then(()=>{
        console.log("MongoDb is Connected");
    })
    .catch(err=>console.log(err));


app.use('/', route);

app.listen(process.env.PORT || 4000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});
