import { combineReducers } from 'redux'
import {reducer as contactsReducer} from './contactsReducer'

export default combineReducers({
  contactObject: contactsReducer,
})