import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/AuthActions';


class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
      
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.auth(this.state, this.props.title);
  }
  render() {
    const { username, password } = this.state;
    const { title } = this.props;

    return (
      <div>
        <h1> {title} </h1>
        <form onSubmit={ this.handleSubmit }>
          <label>
            username:
            <input onChange={ this.handleChange } type="text" name="username" value={ username }/>
          </label>
          <label>
              password:
            <input onChange={ this.handleChange } type="password" name="password" value={ password }/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


AuthForm.defaultProps = {
};
AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...authActions }, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(AuthForm);
