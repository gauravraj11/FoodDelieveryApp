const mongoose  = require("mongoose");

var mongoURL = "mongodb+srv://gauravraj:Mongo%40raj11@cluster0.cddlpyx.mongodb.net/FoodApp?retryWrites=true&w=majority" ;

mongoose.connect(mongoURL, {useNewUrlParser: true,useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection ;

db.on('connected' , ()=> {
    console.log("MongoDB connected successfully");
})

db.on('error' , ()=> {
    console.log("MongoDB connection failed");
})

module.exports = mongoose