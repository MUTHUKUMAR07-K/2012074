const Train=require('../model/model')
const express=require('express')
const router=express.Router();
router.get('/',async (req,res)=>{
    try{
        data=await Train.find();
        data=data.sort((a,b)=>{
            return a.price.sleeper-b.price.sleeper;
        })
        data=data.sort((a,b)=>{
            return a.price.AC-b.price.AC;
        })
        data=data=data.sort((a,b)=>{
            return a.seatsAvailable.sleeper-b.seatsAvailable.sleeper;
        })
        data=data.sort((a,b)=>{
            return a.seatsAvailable.AC-b.seatsAvailable.AC;
        })
        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
    }
})
router.get('/:id', async (req,res)=>{
    try{
        const data=await Train.find({"trainNumber":req.params.id});
        //const data=await Train.find({$nin:"_id"})
        res.status(200).send(data);
        //res.send('Welcome');
    }
    catch(err){
        console.log(err);
    }
})
module.exports=router;
