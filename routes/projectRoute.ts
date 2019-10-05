//const express = require("express")
const router = express.Router();
const Projects = require("../models/Projects");
//const db = require('../config/index')

// Routes
// =============================================================
module.exports = function(app) {

router.get('/',(req,res)=>{

    Projects.findAll()
    .then(projects =>{

        console.log(projects);
        res.sendStatus(200);
    })
    .catch(err => console.log(err));
}) 

};