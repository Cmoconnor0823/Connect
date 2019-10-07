<<<<<<< HEAD
const express = require("express")
const router = express.Router();
=======
//const express = require("express")
//const router = express.Router();
>>>>>>> 643a92d18adcda9b68a9f7e70032ed3f5ac02e55
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