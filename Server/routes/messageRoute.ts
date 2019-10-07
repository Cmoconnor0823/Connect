//const express = require("express")
//const router = express.Router();
const Messages = require("../models/Messages");
//const db = require('../config/index')

// Routes
// =============================================================
module.exports = function(app) {

router.get('/',(req,res)=>{

    Messages.findAll()
    .then(messages =>{

        console.log(messages);
        res.sendStatus(200);
    })
    .catch(err => console.log(err));
}) 

};