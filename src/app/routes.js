import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from './actions/AuthActions';
import Toaster from './components/Toaster';
import LandPage from './components/LandPage';
import App from './containers/App';
import Nav from './components/Nav';
import AuthForm from './components/AuthForm';
import './style/route.sass';

class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: ''
    };
  }
  componentDidMount() {
    this.props.actions.verifyRememberMe();
    if (this.props.auth.isLogedOut) {
      this.setState({ page: '/' });
    }
  }
  componentWillReceiveProps(nextProps) {
    const { userSignedIn, isLogedOut, isRememberMe } =  nextProps.auth;

    if ((Object.keys(userSignedIn).length > 0) 
    && ((Object.keys(this.props.auth.userSignedIn).length === 0))) {
      if (!isLogedOut && !isRememberMe) this.props.actions.setToLocalStorage(userSignedIn);
      
      this.setState({ page: '/tennantList' });
    } else if ((Object.keys(userSignedIn).length === 0) 
    && ((Object.keys(this.props.auth.userSignedIn).length === 0))) {
      this.setState({ page: '/login' });
    }
  }
  render() { 
    if (this.state.page.length) {
      const path = this.state.page;

      this.setState({ page: '' });
      
      return <Redirect push to={ path }/>;
    }
    
    return (   
      <div className="routerContainer">
        <Nav logout={ this.props.actions.logout } login={ this.props.auth.isLogedOut } />
        <div className="routerItems">
          <div className="routerItem1">
            <Switch>
              <Route exact path="/" component={ LandPage } />
              <Route exact path="/login" render={ () => <AuthForm title="signin"/> } />
              <Route exact path="/signup" render={ () => <AuthForm isSignup title="signup"/> } />
              <Route path="/tennantList" component={ App } />
            </Switch>
          </div>
          
        </div>
        <Toaster />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.authReducer
  };
};

Router.defaultProps = {
  auth: {},
  actions: {}
};
Router.propTypes = {
  auth: PropTypes.object,
  actions: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...authActions }, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Router));

