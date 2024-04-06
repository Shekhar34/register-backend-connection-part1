import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
    <div className="container">
      <h2>404 Error: Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
    </div>
    <div className="btns">
      <NavLink to="/">  <input type="submit" value="return to home" /></NavLink>
      <NavLink to="/contact"> <input type="submit" value="report problem" /></NavLink>
    </div>
    </>
  );
};

export default ErrorPage;
