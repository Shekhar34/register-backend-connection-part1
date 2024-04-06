const Contact=require("../models/contact-model");

const contactForm = async(req,res) =>{
    try {
        const response=req.body;
        await Contact.create(response);
        return res.json({msg:"message send succesful"});
    } catch (error) {
        return res.json({msg:"not delivered"});
    }
};

module.exports=contactForm;