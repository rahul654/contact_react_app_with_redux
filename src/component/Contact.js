import React, { Component } from 'react';
import { connect } from "react-redux";
import { createContact, deleteContact, editContact } from "../actions/contactActions";
import SingleContactCard from '../reusableComponent/SingleContactCard';
import '../assests/styles/Contact.css'


class Contact extends Component {
  state = {
    name: "",
    editable: false,
    editContactIndex: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value,
    })
  }

  onAddContact = () => {
    {this.state.editable ? 
      this.props.editContact(this.state.editContactIndex, this.state.name)
      : this.props.createContact(this.state.name)
    }
    this.setState({
      name: "",
      editable: false
    })
  }

  onEditClick =(index) => {
    this.setState({
      editable: true,
      name: this.props.contact[index].name,
      editContactIndex: index
    })

  }

  onDeleteContact = (index) => {
    console.log("Delete Clicked")
    this.props.deleteContact(index);
  }

  render() {
    return (
      <div className="container">
        
        <div className="row text-center">
          <div className="text-center w-100">
          <h1>Contact App</h1>

          </div>
        </div>
          <div className="form-row mt-4">
            <div className="form-group col-sm-5 offset-sm-2">
            <input
          type='text'
          className="form-control"
          placeholder='Enter Your Name'
          name='name'
          onChange={this.handleChange}
          value={this.state.name}
        />
          </div>
          <div className="form-group col-sm-3">
          <button type="button" className="btn btn-primary" onClick={() => this.onAddContact()}>
          {this.state.editable ? "Update Contact" : "Add Contact"}
        </button>
          </div>
        </div>

        <div className="d-flex flex-row flex-wrap">
        {this.props.contact?.map((contact, index) => (
            <SingleContactCard
              key={'data' + index}
              name= {contact.name}
              index = {index}
              onEditClick = {() => this.onEditClick(index)}
              onDeleteClick = {() => this.onDeleteContact(index)}
            />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  contact: state.contactReducer.contact,
})

export default connect(mapStateToProps, {createContact, deleteContact, editContact})(Contact);