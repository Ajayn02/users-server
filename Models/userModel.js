const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    age:{
        required:true,
        type:String
    },
    phone:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
    
})

const users=new mongoose.model('users',userSchema)
module.exports=users