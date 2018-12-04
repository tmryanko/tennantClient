import React from 'react';
import { NavLink } from 'react-router-dom';

const LandPage = () => {
  return (
    <div>
      <div>Welcome to Tennants Managment App</div>
      <div>
        <div>
          <NavLink to="/signup">signup</NavLink>
        </div>    
      </div> 
    </div>
  );
};

export default LandPage;
