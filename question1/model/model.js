const mongoose=require('mongoose');

const TrainModel=new mongoose.Schema({
    trainName:{
        type:String
    },
    trainNumber:{
        type:String
    },
    departureTime:{
        Hours:Number,
        Minutes:Number,
        Seconds:Number
    },
    seatsAvailable:{
        sleeper:Number,
        AC:Number
    },
    price:{
        sleeper:Number,
        AC:Number
    },
    delayedBy:Number
})
module.exports=mongoose.model("Trains",TrainModel);
