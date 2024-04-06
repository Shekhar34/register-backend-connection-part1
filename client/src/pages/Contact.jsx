import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: ""
  });

  // Handle input data
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add further logic here, such as sending the form data to a server
  };

  return (
    <div className="container">
      <div className="left">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required value={formData.username} onChange={handleInput} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleInput} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required value={formData.message} onChange={handleInput} />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
