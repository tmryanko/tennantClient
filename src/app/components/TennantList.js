import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/tennantList.sass';
import AddTennantModal from './AddTennantModal';
import TennantItem from './TennantItem';

export default class TennantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      tennant: {},
      searchTennant: ''
    };
  }
  handleEditModal = (item) => {
    this.setState({ tennant: item });
    this.setState({ show: true });
  }
  hanldeDelete = (tennant) => {
    this.props.delTennant(tennant);
  }; 
  handleSearch = (e) => {
    this.setState({
      searchTennant: e.target.value
    });
  }
  chooseList = () => {
    if (this.state.searchTennant.length > 0) {
      return this.renderSearch();
    } 
    if (this.props.debt === null) return this.renderList();
      
    return this.renderFilterList();
  }

  renderFilterList = () => {
    const list = this.props.tenList.filter((item) => {
      return item.financialDebt === this.props.debt;
    });
    const arr = list.map((item) => {
      return (
        <TennantItem
        key={ item._id }
        tennant={ item }
        editTen={ (ten) => this.handleEditModal(ten) }
        deleteTen={ (ten) => this.hanldeDelete(ten) }/>
      );
    });

    
    return <tbody>{arr}</tbody>;
  }

  renderList = () => {
    const list = this.props.tenList.map((item) => {
      return (
        <TennantItem 
        key={ item._id }
        tennant={ item }
        editTen={ (ten) => this.handleEditModal(ten) }
        deleteTen={ (ten) => this.hanldeDelete(ten) }/>
      );
    });
  
    return <tbody>{list}</tbody>;
  }
  renderSearch = () => {
    const arr = this.props.tenList.filter((item) => {
      return item.name.includes(this.state.searchTennant);
    });
    const list = arr.map((item) => {
      return (
        <TennantItem 
        key={ item._id }
        tennant={ item }
        editTen={ (ten) => this.handleEditModal(ten) }
        deleteTen={ (ten) => this.hanldeDelete(ten) }/>
      );
    });

    return <tbody>{list}</tbody>;
  }

  render() {
    return (
      <div className="tenListContainer">
        <input type="text" onChange={ this.handleSearch } value={ this.state.searchTennant }/>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>phoneNum</th>
              <th>Adress</th>
            </tr>
          </thead>
          {this.chooseList()}
        </table>
        <AddTennantModal
        title="Edit Tennant"
        onHide={
          () => {
            this.setState({ show: false });
          } 
        }
        onAddTennant={ (tennant) => this.props.editTennant(tennant, this.state.tennant._id) }
        onShow={ this.state.show }
        item={ this.state.tennant }/>
      </div>
    );
  }
}
TennantList.defaultProps = {
  tenList: [],
  delTennant: () => {},
  debt: null,
  editTennant: () => {}
};
TennantList.propTypes = {
  tenList: PropTypes.array,
  delTennant: PropTypes.func,
  editTennant: PropTypes.func,
  debt: PropTypes.bool
};
