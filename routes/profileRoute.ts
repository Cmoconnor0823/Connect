//const express = require("express")
//const router = express.Router();
const Profiles = require("../models/Profiles");
//const db = require('../config/index')

// Routes
// =============================================================
module.exports = function(app) {

router.get('/',(req,res)=>{

    Profiles.findAll()
    .then(profiles =>{

        console.log(profiles);
        res.sendStatus(200);
    })
    .catch(err => console.log(err));
}) 

};