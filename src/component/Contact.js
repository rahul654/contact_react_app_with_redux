import React, { Component } from 'react';
import { connect } from "react-redux";
import { createContact, deleteContact, editContact } from "../actions/contactActions";
import SingleContactCard from '../reusableComponent/SingleContactCard';
import '../assests/styles/Contact.css'


class Contact extends Component {
  state = {
    name: "",
    editMode: false,
    editContactIndex: "",
  };

  // Function to handle the onChange Property of input value - Sudama [09/06/2020]
  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value,
    })
  }

  // Function for adding contact or update the contact depending on the state - Sudama [09/06/2020]
  onAddOrUpdateContact = () => {
    {this.state.editMode ? 
      this.props.editContact(this.state.editContactIndex, this.state.name)
      // Edit Contact can be done by alternative method given below - Sudama [09/06/2020]
      //this.props.contact[this.state.editContactIndex].name = this.state.name - Sudama [09/06/2020]
      : this.props.createContact(this.state.name)
    }
    this.setState({
      name: "",
      editMode: false
    })
  }

  // Funtion when user click on edit icon of single contact card - Sudama [09/06/2020]
  onEditClick =(index) => {
    this.setState({
      editMode: true,
      name: this.props.contact[index].name,
      editContactIndex: index
    })

  }

  // Funtion to delete single contact card when user click on delete icon - Sudama [09/06/2020]
  onDeleteContact = (index) => {
    this.props.deleteContact(index);
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div className="container">
        
        <div className="row text-center">
          <div className="text-center w-100">
          <h1>Contact App</h1>

          </div>
        </div>
        {/* Form Starts Here - Sudama [09/06/2020] */}
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
              {/* Button For Adding Contact and Update Contact - Sudama [09/06/2020] */}
              <button type="button" className="btn btn-primary" onClick={() => this.onAddOrUpdateContact()}>
                {this.state.editMode ? "Update Contact" : "Add Contact"}
              </button>
            </div>
        </div>
        {/* Form Ends Here - Sudama [09/06/2020] */}

        {/* Displaying All Contacts Card - Sudama [09/06/2020] */}
        <div className="d-flex flex-row flex-wrap justify-content-center">
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

// For Mapping State to Props from Reducers - Sudama [09/06/2020]
const mapStateToProps = (state) => ({
  contact: state.contactReducer.contact,
})

export default connect(
  mapStateToProps, 
  {createContact, 
  deleteContact,
  editContact})(Contact);