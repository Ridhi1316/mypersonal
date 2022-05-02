const express = require('express');
const bodyParser = require('body-parser'); //In order to get access to the post data we have to use body-parser . Basically what the body-parser is which allows express to read the body and then parse that into a Json object that we can understand.
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express(); //Calls the express function "express()" and puts new Express application inside the app variable (to start a new Express application).

app.use(bodyParser.json());  //use(bodyParser. json()) basically tells the system that you want json to be used. 
app.use(bodyParser.urlencoded({ extended: true })); //basically tells the system whether you want to use a simple algorithm for shallow parsing complex algorithm for deep parsing that can deal with nested objects (i.e. true).


mongoose.connect("mongodb+srv://g-2-project-1:MvD9HwLH72zL105K@cluster0.j1yrl.mongodb.net/myProject1-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true //The underlying MongoDB driver has deprecated their current connection string parser. Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser. You should set useNewUrlParser: true unless that prevents you from connecting.
})
.then( () => console.log("MongoDb is connected")) //then() method returns a Promise . It takes up to two arguments: callback functions for the success and failure cases of the Promise
.catch ( err => console.log(err) ) //catches an error

app.use('/', route); // function is used to mount the specified middleware function(s) at the path which is being specified. It is mostly used to set up middleware for your application.


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});