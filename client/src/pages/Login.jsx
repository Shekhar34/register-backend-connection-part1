import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  //handle input data
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      //put value as it is spread operator
      ...user,
      //dynamically change value
      [name]: value,
    });
  };

  //handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <form action="#" method="post" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required value={user.email} onChange={handleInput} />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required value={user.password} onChange={handleInput} />
            </div>
            <input type="submit" value="login" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;
