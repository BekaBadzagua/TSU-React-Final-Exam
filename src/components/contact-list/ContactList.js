import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/contacts'
import toggleOpen from '../../decorators/toggleOpen'
import ContactListItem from '../contact-list-item/ContactListItem'
import './ContactList.css'

class ContactList extends Component {
  componentDidMount() {
    if (!this.props.contacts) { //  filteredContacts === undefined
      this.props.fetchContacts()
      this.props.searchContact()
    }
  }

  getContacts = (contacts) => (
    <>
      {contacts &&
        contacts.map((contact) => (
          <ContactListItem
            key={contact.id}
            contact={contact}
          />
        ))}
    </>
  )

  render() {
    const { contacts, isOpen, toggle } = this.props
    return (
      <div className='container'>
        <button className='btn btn-primary btn-xs' onClick={toggle}>
          show/hide
        </button>
        {isOpen ? this.getContacts(contacts) : null}
      </div>
    )
  }
}

// function mapStateToProps({ contactObject }) {
//   const { contacts, search } = contactObject
//   return {
//     filteredContacts:
//       contacts && contacts.filter((contact) => contact.name.includes(search)),
//     contacts:this.state
//   }
// }


const mapPropsToState = (state) => {
  return {
    contacts: state.contactObject.filteredContacts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => dispatch(actions.init_Contacts('')),
    searchContact: (data) => dispatch(actions.searchContact(data))
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(toggleOpen(ContactList));

