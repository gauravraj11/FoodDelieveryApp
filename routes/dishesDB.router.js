const express = require('express')

const router = express.Router();
const Dishes = require("../models/dishModel.js");


router.route('/').get( (req, res) => {

    Dishes.find().then((docs)=> {
        if(!docs){
            res.status(400).send({message: "something went wrong"});
        }else{
            res.send(docs);
        }
    }).catch((err)=>{
        res.status(500).send({message: "server not available"});
    })
   
});


module.exports = router;