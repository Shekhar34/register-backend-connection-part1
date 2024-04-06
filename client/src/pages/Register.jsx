import React, { useState } from "react";

const Register = () => {

  const [user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:""
  });

  //handle input data
  const handleInput=(e)=>{
    const { name, value } = e.target;
    console.log(e);

    setUser({
      //put value as it is spread opretor
      ...user,
      //dynamically chnage value
      [name]:value,
    })
  }

  //handling form submission
  const handleSubmit= async(e)=>{
     e.preventDefault();
     console.log(user);
     try {
       //fetch url and backend connection code (fetch return promise so use async and await)
     const response= await fetch(`http://localhost:3000/api/auth/register`,{
      method:"POST",
      headers:{
        'Content-Type':"application/json" 
      },
      body:JSON.stringify(user),
     });
     console.log(response);
     } catch (error) {
      console.log("register",error);
     }
    
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <form action="#" method="post" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required value={user.username} onChange={handleInput} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required value={user.email} onChange={handleInput} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required value={user.phone} onChange={handleInput}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required value={user.password} onChange={handleInput} />
            </div>
            <input type="submit" value="Register" />
          </form>
        </div>
        <div className="right">
          <img src="your_image.jpg" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default Register;
