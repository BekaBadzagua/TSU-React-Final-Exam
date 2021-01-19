import React from 'react'
import Header from './components/header/Header'
import { Switch, Route } from 'react-router-dom'
import Sidebar from './components/sidebar'
import Contacts from './pages/Contacts'
import Posts from './pages/Posts'
import { AuthProvider } from './AuthContext'
import AddContact from './pages/AddContact'
import EditContact from './pages/EditContact'
import SignUp from './components/Auth/SignUp'
import SignIn from './components/Auth/SignIn'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <>
        <AuthProvider>

          <Sidebar />
          <Header />
          <div className='content'>
            <Switch>
              <Route path='/' exact component={Contacts} />
              <Route path='/addContact' component={AddContact} />
              <Route path='/posts' component={Posts} />
              <Route path='/edit/:id' component={EditContact} />
              <Route path='/signup' exact component={SignUp} />
              <Route path='/signin' exact component={SignIn} />
            </Switch>
          </div>
        </AuthProvider>
      </>
    )
  }
}

export default App


