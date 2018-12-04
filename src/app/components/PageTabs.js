import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import TennantList from './TennantList';
import '../style/pageTabs.sass';

class PageTabs extends Component {
  constructor(props) {
    super(props);
    
    this.handleSelect = this.handleSelect.bind(this);
    
    this.state = {
      key: 1
    };
  }
    handleSelect = (key) => {
      this.setState({ key });
    }  
    render() {
      return (
        <div className="pageContainer">
          <Tabs
        activeKey={ this.state.key }
        onSelect={ this.handleSelect }
        id="controlled-tab-example">
            <Tab eventKey={ 1 } title="All Tennants">
              <TennantList 
              tenList={ this.props.tennantList }
              delTennant={ (ten) => this.props.deleteTennant(ten) }
              editTennant={ (tennant, id) => this.props.onEditTennant(tennant, id) }/>
            </Tab>
            <Tab eventKey={ 2 } title="Tennants with Debt">
              <TennantList 
              tenList={ this.props.tennantList }
              delTennant={ (ten) => this.props.deleteTennant(ten) }
              debt />
            </Tab>
            <Tab eventKey={ 3 } title="Tennants without Debt" >
              <TennantList 
              tenList={ this.props.tennantList }
              delTennant={ (ten) => this.props.deleteTennant(ten) }
              debt={ false }/>
            </Tab>
          </Tabs> 
        </div>
      );
    }
}

export default PageTabs;

PageTabs.defaultProps = {
  tennantList: [],
  deleteTennant: () => {},
  onEditTennant: () => {}
};
PageTabs.propTypes = {
  tennantList: PropTypes.array,
  deleteTennant: PropTypes.func,
  onEditTennant: PropTypes.func
};
