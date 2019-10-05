// const express = require("express")
// const router = express.Router();
const News = require("../models/News");
// const db = require('../config/index')

// Routes
// =============================================================
module.exports = function(app) {

router.get('/',(req,res)=>{

    News.findAll()
    .then(news =>{

        console.log(news);
        res.sendStatus(200);
    })
    .catch(err => console.log(err));
}) 

};