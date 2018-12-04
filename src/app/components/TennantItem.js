import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TennantItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <tr >
        <td>{this.props.tennant.name}</td>
        <td>{this.props.tennant.phoneNumber}</td>
        <td>{this.props.tennant.adress}</td>
        <td><button onClick={ () => this.props.editTen(this.props.tennant) }>edit</button></td>
        <td><button onClick={ () => this.props.deleteTen(this.props.tennant) }>delete</button></td>
      </tr>
    );
  }
}
TennantItem.defaultProps = {
  tennant: {},
  deleteTen: () => {},
  editTen: () => {}
};
TennantItem.propTypes = {
  tennant: PropTypes.object,
  deleteTen: PropTypes.func,
  editTen: PropTypes.func
};
