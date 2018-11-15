import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Toaster from './components/Toaster';
import LandPage from './components/LandPage';
import ToDoPage from './containers/ToDoPage';
import Nav from './components/Nav';
import AuthForm from './components/AuthForm';
import './style/app.sass';

class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() { 
    return (   
      <div className="appContainer">
        <Nav />
        <div className="appItems">
          <div className="appItem1">
            <Switch>
              <Route exact path="/" component={ LandPage } />
              <Route exact path="/login" render={ () => <AuthForm title="LogIn"/> } />
              <Route exact path="/signup" render={ () => <AuthForm isSignup title="SignUp"/> } />
              <Route path="/notes" component={ ToDoPage } />
              <Route path="/reminders" component={ ToDoPage } />
            </Switch>
          </div>
          
        </div>
        <Toaster />
      </div>
    );
  }
}
export default Router;
