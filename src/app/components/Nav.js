import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/nav.sass';


const Nav = () => {
  return (
    <div className="nav">
      <div className="logo-box">
        <div className="navLogo">logo</div>
      </div>
      <div className="rightNav">
        <div className="navLogin">
          <NavLink to="/login">login</NavLink>
        </div>/
        <div className="navSignup">
          <NavLink to="/signup">signup</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
