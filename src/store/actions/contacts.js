import * as actionTypes from './actionTypes'
import axios from 'axios'

// Change Data
const initContacts = (payload) => ({
    type: actionTypes.INIT_CONTACTS,
    payload: payload
})
const setContacts = (payload) => ({
    type: actionTypes.LOAD_CONTACTS,
    payload: payload
})
const addContact = (payload) => ({
    type: actionTypes.ADD_CONTACT,
    payload: payload
})
const editContact = (payload) => ({
    type: actionTypes.EDIT_CONTACT,
    payload: payload
})
const removeContact = (payload) => ({
    type: actionTypes.REMOVE_CONTACT,
    payload: payload
})
export const searchContact = (payload) => ({
    type: actionTypes.SEARCH_CONTACT,
    payload: payload
})

// Async 
export const init_Contacts = () => {
    return (dispatch) => {
        axios.get('https://tsu-react-final-exam-default-rtdb.europe-west1.firebasedatabase.app/contacts.json')
            .then(response => {
                dispatch(initContacts(response.data))
            })
            .catch(error => { console.log(error) })
    }
}
export const get_Contacts = () => {
    return (dispatch) => {
        axios.get('https://tsu-react-final-exam-default-rtdb.europe-west1.firebasedatabase.app/contacts.json')
            .then(response => {
                dispatch(setContacts(response.data))
            })
            .catch(error => { console.log(error) })
    }
}

export const post_Contact = (contact) => {
    return (dispatch) => {
        axios.post('https://tsu-react-final-exam-default-rtdb.europe-west1.firebasedatabase.app/contacts.json', contact)
            .then((response) => {
                // console.log(response.data);
                dispatch(addContact(contact))
            })
            .catch(error => { console.log(error) })
    }
}


export const put_Contact = (contact) => {
    return (dispatch) => {
        axios.put(`https://tsu-react-final-exam-default-rtdb.europe-west1.firebasedatabase.app/contacts/${contact.fireBaseid}.json`, contact)
            .then((response) => {
                dispatch(editContact(contact))
            })
            .catch(error => { console.log(error) })
    }
}
export const delete_contact = (id) => {
    return (dispatch) => {
        axios.delete(`https://tsu-react-final-exam-default-rtdb.europe-west1.firebasedatabase.app/contacts/${id}.json`)
            .then(() => {
                dispatch(removeContact(id))
            })
            .catch(error => { console.log(error) })
    }
}
