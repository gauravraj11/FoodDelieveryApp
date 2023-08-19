const mongoose = require("mongoose");

const dishSchema = mongoose.Schema({
    id : {type: Number , require} ,
    name : {type: String , require} ,
    image : {type: String , require}  ,
    category: {type: String , require} ,
    label: {type: String , require}  ,
    price:  {type: Number , require} ,
    description:{type: String , require},
    comments: []   
},
{
    timestamps: true,
})

const dishModel = mongoose.model("dishes",dishSchema);
 
module.exports = dishModel;