const mongoose=require('mongoose');
const { Schema } = mongoose;

const contactSchema=new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
});

const Contact=new mongoose.model('Contact',contactSchema);

module.exports=Contact;