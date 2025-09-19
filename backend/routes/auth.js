const router = require('express').Router()
const User= require('../models/user.models');

router.route('/signup').post(async(req,res)=>{
    const {username , password}= req.body;
    const newUser = new User ({ username,password})
    try{
        await newUser.save();
        res.status(400).json('Error:'+err)
    }
    catch(err){
        res.status(400).send('Error registrating user'+err.message)
    }
});

module.exports = router