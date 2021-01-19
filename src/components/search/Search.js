import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/contacts'
import './Search.css'

class Search extends React.Component {
  state = {
    searchValue: '',
  }

  handleSearch = (event) => {
    this.setState({ searchValue: event.target.value }, () => {
      this.props.searchContact(this.state.searchValue)
    })
  }

  render() {
    return (
      <form className='filter-form container'>
        <div className='input-group input-group'>
          <div className='input-group-prepend'>
            <Link className='btn btn-outline-secondary' to='/addContact'>
              დამატება
            </Link>
          </div>
          <input
            placeholder='ძებნა'
            type='text'
            className='form-control'
            name='search'
            value={this.state.searchValue}
            onChange={this.handleSearch}
          />
        </div>
      </form>
    )
  }
}




const mapDispatchToProps = dispatch => {
  return {
    searchContact: (data) => dispatch(actions.searchContact(data))
  }
}

export default connect(null, mapDispatchToProps)(Search);


