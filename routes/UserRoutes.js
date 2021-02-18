const express = require('express');
const userModel = require('../models/users');
const app = express();

app.get('/users', async (req, res)=>{
    const users = await userModel.find({});
    try{
        res.send(users)
    }
    catch(err){
        res.status(500).send(err);
    }
});

app.post('/user', async(req, res)=>{
    const user = new userModel(req.body);
    try{
        await user.save((err)=>{
            if(err){
                console.log("the user is not added to the database")
                res.send(err);
            }else {
                res.send(user);
            }
        });
    } catch (err){
        res.status(500).send(err);
    
    }
    
});

module.exports=app;

