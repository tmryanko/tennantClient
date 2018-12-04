import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

class AddTennantModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      adress: '',
      financialDebt: true,
      _id: ''
    };
  }
 
  componentWillMount() {
    if (this.props.item !== null) {
      this.setState({
        _id: this.props.item._id,
        name: this.props.item.name
      }); 
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleAddTennant = (e) => {
    e.preventDefault();
    if (this.props.title === 'Add Tennant') {
      this.props.onAddTennant(this.state);
    } else {
      this.setState({
        _id: this.props.item._id
      });
      this.props.onAddTennant(this.state);
    }
  }

  render() {
    const {
      name, phoneNumber, adress, financialDebt 
    } = this.state;
    const { onShow, onHide, title } = this.props;
    
    return (
      <div>
        <Modal
            show={ onShow }
            onHide={ onHide }>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              { title }
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form >
              <label>
                name:
                <input onChange={ this.handleChange } type="text" name="name" value={ name } />
              </label>
              <label>
              phone:
                <input onChange={ this.handleChange } type="number" name="phoneNumber" value={ phoneNumber } />
              </label>
              <label>
              adress:
                <input onChange={ this.handleChange } type="text" name="adress" value={ adress } />
              </label>
              <label>
              financial debt:
                <input onChange={ this.handleChange } type="radio" name="financialDebt" value={ financialDebt } />
              no financial debt:
                <input onChange={ this.handleChange } type="radio" name="financialDebt" value={ !financialDebt } />
              </label>
              <button onClick={ this.handleAddTennant } >add tennant</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ onHide }>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddTennantModal;

AddTennantModal.defaultProps = {
  title: '',
  onShow: false,
  onHide: () => {},
  onAddTennant: () => {},
  item: {}
};
    
AddTennantModal.propTypes = {
  title: PropTypes.string,
  onShow: PropTypes.bool,
  onHide: PropTypes.func,
  onAddTennant: PropTypes.func,
  item: PropTypes.object
};
