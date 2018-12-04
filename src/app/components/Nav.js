import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/nav.sass';

class Nav extends Component {
  renderlogin = () => {
    return (
      <div>
        <div className="navLogin">
          <NavLink to="/login">login</NavLink>
        </div> /
        <div className="navSignup">
          <NavLink to="/signup">signup</NavLink>
        </div>
      </div>
    );
  };
  renderlogout = () => {
    // this.props.actions.logout();

    return (
      <div className="navLogin">
        <NavLink onClick={ this.props.logout } to="/">logout</NavLink>
      </div>
    );   
  };

  render() {
    return (
      <div className="nav">
        <div className="logo-box">
          <div className="navLogo">logo</div>
        </div>
        <div className="rightNav">
          {(this.props.login) ? this.renderlogin() : this.renderlogout()}
        
        </div>
      </div>
    );
  }
}

export default Nav;
Nav.defaultProps = {
  login: false,
  logout: () => {} 
};
Nav.propTypes = {
  login: PropTypes.bool,
  logout: PropTypes.func
};
