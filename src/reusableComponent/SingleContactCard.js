import React, { Component } from 'react'

class SingleContactCard extends Component {
  render() {
    return (
      <div className=" contact_card card m-2" style={{width: "fit-content", minWidth: "15rem"}}>
        {/* Delete Icon  - Sudama [02/06/2020]*/}
        <div onClick={this.props.onDeleteClick} style={{position: "absolute", right: "10px", top: "20px", color: "red"}}><i className="fas fa-trash" /></div>

        <div onClick={this.props.onEditClick} style={{position: "absolute", right: "30px", top: "20px", color: "red"}}><i className="fas fa-edit" /></div>
        {/* Contact Info - Sudama [02/06/2020]*/}
        <div className="card-body">
            <h5 className="card-title">Contact No. {this.props.index + 1}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Name: {this.props.name}</h6>
        </div>
      </div>
    )
  }
}

export default SingleContactCard;