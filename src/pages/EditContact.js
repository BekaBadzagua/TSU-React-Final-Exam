import React, { Component } from 'react'
import * as actions from '../store/actions/contacts'
import { connect } from 'react-redux'

class EditContact extends Component {
    state = {
        id: '',
        name: '',
        phone: '',
        email: '',
    }

    componentDidMount() {
        let id = this.props.location.pathname.split('/')[2]
        let curContact = this.props.contacts.filter((item) => item.fireBaseid === id)[0]

        this.setState({
            fireBaseid: curContact.fireBaseid,
            id: curContact.id,
            name: curContact.name,
            phone: curContact.phone,
            email: curContact.email,
        })
    }

    hanldeChange = (event) => {
        const { name, value } = event.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    save = () => {
        this.props.editContact(this.state)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='container filter-form'>
                <h4>კონტაქტის დამატება</h4>
                <hr />
                <br />
                <form>
                    <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>დასახელება</label>
                        <input
                            type='text'
                            className='form-control'
                            id='exampleInputEmail1'
                            aria-describedby='emailHelp'
                            value={this.state.name}
                            name='name'
                            onChange={this.hanldeChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>ტელეფონი</label>
                        <input
                            type='text'
                            className='form-control'
                            id='exampleInputPassword1'
                            value={this.state.phone}
                            name='phone'
                            onChange={this.hanldeChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>ელ.ფოსტა</label>
                        <input
                            type='text'
                            className='form-control'
                            id='exampleInputPassword1'
                            value={this.state.email}
                            name='email'
                            onChange={this.hanldeChange}
                        />
                    </div>
                    <button
                        type='button'
                        className='btn btn-primary mr-1'
                        onClick={this.save}
                    >
                        დამატება
          </button>
                    <button
                        type='button'
                        className='btn btn-secondary'
                        onClick={() => this.props.history.push('/')}
                    >
                        დახურვა
          </button>
                </form>
            </div>
        )
    }
}
const mapPropsToState = (state) => {
    return {
        contacts: state.contactObject.contacts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        editContact: (data) => dispatch(actions.put_Contact(data))
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(EditContact)


