import mongoose from "mongoose";

const userSchema = new mongoose.Schema(

    {
        name : { type : String , required : true},
        email : {type : String , required : true , unique : true},
        password : {type : String , required : true},
        role: { type: String, enum: ['user', 'admin'], default: 'user' }    
    },
    {timestamps : true} , 
    {collection : 'revise'}
)



const UserModel = mongoose.model('revise' , userSchema)

export default UserModel