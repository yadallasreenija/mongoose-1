const mongoose = require('mongoose')



const userSchema = new mongoose.Schema(
    {
    username: {type:String, required:true,unique:true},
    email: {type:String, required:true,unique:true},
    password: {type:String, required:true},
    role: {type:String, default:[]}  
} 
)

const user = mongoose.model('userSchema',userSchema);

const profileSchema = new mongoose.Schema(
    {
        firstname: {type:String},
        lastname : {type:String},
        age : {type:Number},

    }

)

const profile = new mongoose.model('profile',profileSchema)

const activitySchema = new mongoose.Schema({
    lastlogin:{type:Date}
})

const activity= new mongoose.model('activity',activitySchema)