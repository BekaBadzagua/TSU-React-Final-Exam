import React from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import './ContactListItem.css'
import * as actions from '../../store/actions/contacts'

function ContactListItem({
  contact: { id, name, phone, email, fireBaseid },
  removeContact,
}) {
  const history = useHistory()
  const editContact = (id) => {
    history.push(`/edit/${id}`)
  }

  return (
    <div className='card mt-3'>
      <div className='card-body'>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>phone: {phone}</p>
        <span>email: {email}</span>
        <span className='float-right'>
          <button
            className='btn btn-warning mr-2'
            onClick={() => editContact(fireBaseid)}
          >
            კორექტირება
          </button>
          <button className='btn btn-danger' onClick={() => removeContact(fireBaseid)}>
            წაშლა
          </button>
        </span>
      </div>
    </div>
  )
}


const mapDispatchToProps = dispatch => {
  return {
    removeContact: (id) => dispatch(actions.delete_contact(id))
  }
}

export default connect(null, mapDispatchToProps)(ContactListItem)
