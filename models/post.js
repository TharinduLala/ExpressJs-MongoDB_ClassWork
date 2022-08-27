const mongoose =require('mongoose');

const postSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    createdTime:{
        type:Date,
        required:true
    },
    lastUpdatedTime:{
        type:Date,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Post',postSchema);