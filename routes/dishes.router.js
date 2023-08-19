const express = require('express')

const router = express.Router();

const dishes = require ("../data/dishes");

router.route('/').get((req,res)=>{

    res.json(dishes.data)
})

module.exports = router;