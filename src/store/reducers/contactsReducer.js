import * as actionTypes from '../actions/actionTypes'
import { convertFirebaseListToArray } from '../../shared/CustomTools'

const initialState = {
    contacts: undefined,
    filteredContacts: undefined,
    search: '',
}

const initContacts = (state, contacts) => {
    const convertedData = convertFirebaseListToArray(contacts)
    return {
        ...state,
        contacts: convertedData,
        filteredContacts: convertedData
    }
}
const setContacts = (state, contacts) => {
    const convertedData = convertFirebaseListToArray(contacts)
    return {
        ...state,
        contacts: convertedData,
    }
}
const addContact = (state, contact) => {
    let data = [...state.contacts, contact]
    let data2 = [...state.filteredContacts, contact]
    return {
        ...state,
        contacts: data,
        filteredContacts: data2,
    }
}
const deleteContact = (state, id) => {
    let data = [...state.contacts].filter(item => item.fireBaseid !== id)
    let data2 = [...state.filteredContacts].filter(item => item.fireBaseid !== id)
    return {
        ...state,
        contacts: data,
        filteredContacts: data2,
    }
}


const editContact = (state, contact) => {
    let contacts = null;
    let filteredContacts = null;
    if (state.contacts) {
        contacts = [...state.contacts];
        let ind = contacts.findIndex(x => x.id === contact.id)
        contacts[ind] = contact


        filteredContacts = [...state.filteredContacts];
        let ind2 = filteredContacts.findIndex(x => x.id === contact.id)
        filteredContacts[ind2] = contact
    }
    return {
        ...state,
        contacts: contacts,
        filteredContacts: filteredContacts
    }
}
const searchContact = (state, searchValue) => {
    let data = []
    if (state.contacts)
        data = [...state.contacts].filter(item => item.name.includes(searchValue))

    return {
        ...state,
        filteredContacts: data,
    }
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.INIT_CONTACTS: return initContacts(state, payload)
        case actionTypes.LOAD_CONTACTS: return setContacts(state, payload)
        case actionTypes.ADD_CONTACT: return addContact(state, payload);
        case actionTypes.EDIT_CONTACT: return editContact(state, payload);
        case actionTypes.REMOVE_CONTACT: return deleteContact(state, payload);
        case actionTypes.SEARCH_CONTACT: return searchContact(state, payload);
        default: return state
    }
}