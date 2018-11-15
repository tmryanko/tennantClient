import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: ''  
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { email, password, username } = this.state;
    const { isSignup, title } = this.props;

    return (
      <div>
        <h1> {title} </h1>
        <form>
          <label>
            email:
            <input onChange={ this.handleChange } type="email" name="email" value={ email }/>
          </label>
          <label>
              password:
            <input onChange={ this.handleChange } type="password" name="password" value={ password }/>
          </label>
          {isSignup &&
            <label>
            username:
              <input onChange={ this.handleChange } type="text" name="username" value={ username }/>
            </label>
          }
        </form>
      </div>
    );
  }
}


AuthForm.propTypes = {
  isSignup: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};
