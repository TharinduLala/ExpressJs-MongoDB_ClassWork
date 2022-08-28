const mongoose =require('mongoose');

const postSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    createdTime:{
        type:String,
        required:true
    },
    lastUpdatedTime:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Post',postSchema);