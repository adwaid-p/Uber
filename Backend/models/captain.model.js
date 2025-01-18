const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const captainSchema = new mongoose.Schema({
    fullname :{
        firstname:{
            type:String,
            required: true,
            minlength: [3, "First name must be at least 3 characters long"]
        },
        lastname:{
            type:String,
            required: true,
            minlength: [3, "Last name must be at least 3 characters long"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match:[/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,"Please fill a valid email address"]
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String 
    },
    status:{
        type:String,
        enum:["active","inactive"],
        default:"inactive"
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,"Color must be at least 3 characters long"]
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,"Plate must be at least 3 characters long"]
        },
        capacity:{
            type: Number,
            required:true,
            minlength:[1,"Capacity must be at least 1 characters long"]
        },
        vehicleType:{
            type:String,
            required:true,
            enum:["motorcycle","car","auto"],
        }
    },
    location:{
        ltd:{
            type:Number,
        },
        lng:{
            type:Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}

const captainModel = mongoose.model('captain',captainSchema)

module.exports = captainModel