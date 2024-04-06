const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
require('dotenv').config();
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
     },
     email:{
        type:String,
        require:true,
     },
     phone:{
        type:String,
        require:true,
     },
     password:{
        type:String,
        require:true,
     },
    
     isAdmin:{
        type:Boolean,
        default:false,
     },
});


userSchema.pre('save', async function(next){
// console.log("pre method ",this);
//this->current data that is passed belongs to this like name,password,phone email get using (this)
const user=this;

if(!user.isModified('password')){
     next();
}

try {
    const salt = await bcrypt.genSalt(10);
    const hash_password=await bcrypt.hash(user.password,salt);
    user.password=hash_password;//hash password saved to password assignment operator
} catch (error) {
   next(error);
}

});


userSchema.methods.generateToken= async function(){
try {
   return jwt.sign({
      userId:this._id.toString(),
      email:this.email,
      isAdmin:this.isAdmin,
   },
   process.env.jwt_secret_key,{
      //this is optional
      expiresIn:"30d"
   }
   
   );
} catch (error) {
   console.error(error);
}

};

const User=new mongoose.model('User',userSchema);

module.exports=User;