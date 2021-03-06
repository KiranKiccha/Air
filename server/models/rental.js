const mongoose = require('mongoose');
const schema = mongoose.Schema;

const rentalSchema = new schema({
    title:{type:String,required:true,max:[128,'Too long, max is 128 characters']},
    city:{type:String,required:true,lowercase:true},
    street:{type:String,required:true,lowercase:true,min:[4,'Too short, minimum 4 characters are required']},
    category:{type:String,required:true,lowercase:true},
    image:{type:String,required:true,lowercase:true},
    bedrooms:Number,
    shared:Boolean,
    description:{type:String,required:true},
    dailyRate:Number,
    createdAt:{type:Date,default:Date.now}

});

module.exports=mongoose.model('Rental',rentalSchema); 