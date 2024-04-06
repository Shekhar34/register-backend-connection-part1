const {z}=require('zod');

const signupSchema=z.object({
    username: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "nanme at least 3 charcter" })
    .max(255, { message: "name must not be more than 255 charcters" }),
    email: z
    .string({ required_error: "email is required" })
    .email()
    .trim()
    .min(2)
    .max(255, { message: "email must not be more than 255 charcters" }),
    phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(10)
    .max(255, { message: "phone must not be more than 255 charcters" }),
    password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(4, { message: "password at least 7 charcter" })
    .max(255, { message: "password must not be more than 255 charcters" }) 
});

module.exports=signupSchema;
