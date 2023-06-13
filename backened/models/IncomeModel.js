const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const IncomeSchema = new mongoose.Schema({
    tittle:{
             type: String,
             maxLenght: 20,
             trim: true,
             require:true
    },
    amount:{
        type : Number,
        maxLenght:20,
        trim:true,
        require:true
    },
     type :{
        type : String,
        default:"income"
    },
    date :{
        type : Date,
        maxLenght:20,
        trim:true,
        require:true
    },
     category:{
        type : String,
        maxLenght:20,
        trim:true,
        require:true
    },
    description:{
        type : String,
        maxLenght:20,
        trim:true,
        require:true
    }
},{timestamps:true} )

module.exports=mongoose.model('Income',IncomeSchema)