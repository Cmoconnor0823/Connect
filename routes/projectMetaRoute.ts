//const express = require("express")
//const router = express.Router();
const Project_Meta = require("../models/Project_Meta");
//const db = require('../config/index')

// Routes
// =============================================================
module.exports = function(app) {

router.get('/',(req,res)=>{

    Project_Meta.findAll()
    .then(project_meta =>{

        console.log(project_meta);
        res.sendStatus(200);
    })
    .catch(err => console.log(err));
}) 

};