import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';
import * as TennantActions from '../actions/TennantActions';
import PageTabs from '../components/PageTabs';
import AddTennantModal from '../components/AddTennantModal';
import '../style/app.sass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  componentDidMount() {
    if (this.props.auth.userSignedIn.id.length > 0) {
      this.props.actions.getAllTennants(this.props.auth.userSignedIn.id); 
    }
  }
  handleAddTennantModal = () => {
    this.setState({ show: true });
  }
  addNewTennant = (tennant) => {
    this.props.actions.addNewTennant(tennant, this.props.auth.userSignedIn.id);
  };
  handleDelete = (tennant) => {
    this.props.actions.deleteTennants(tennant, this.props.auth.userSignedIn.id);
  }
  handleEditTennant = (tennant, id) => {
    this.props.actions.updateTennant(tennant, id, this.props.auth.userSignedIn.id);
  }
 

  render() {
    return (
      <div className="appContainer">
        <button className="navButton" onClick={ this.handleAddTennantModal }>Add Tennant</button>
        {(this.props.tennant.tennantList === null)
        ? <div>loading...</div>
        : <PageTabs
        tennantList={ this.props.tennant.tennantList }
        deleteTennant={ this.handleDelete }
        onEditTennant={ (tennant, id) => this.handleEditTennant(tennant, id) }/>}
        <AddTennantModal
        title="Add Tennant"
        onHide={
          () => {
            this.setState({ show: false });
          } 
        }
        onAddTennant={ (tennant) => this.addNewTennant(tennant) }
        onShow={ this.state.show }/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
    tennant: state.tennantReducer,
    tennantList: state.tennantReducer
  };
};

App.defaultProps = {
  userSignedIn: {},
  auth: null,
  tennant: null,
  tennantList: null,
  id: ''
};
App.propTypes = {
  actions: PropTypes.object.isRequired,
  userSignedIn: PropTypes.object,
  auth: PropTypes.object,
  tennant: PropTypes.object,
  tennantList: PropTypes.array,
  id: PropTypes.string
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...authActions, ...TennantActions }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
