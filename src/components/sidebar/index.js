import React from 'react'
import './sidebar.css'
import { useAuth } from "../../AuthContext"
import { NavLink } from 'react-router-dom'

export default function Sidebar() {

  const { currentUser, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }
  console.log("Current User");
  console.log(currentUser);

  return (
    <div className='sidebar'>
      <ul>
        <li>
          <NavLink to='/' exact>Contacts</NavLink>
        </li>
        <li>
          <NavLink to='/posts'>Posts</NavLink>
        </li>
        {currentUser ?
          (
            <li>
              <NavLink to='/signin' onClick={handleLogout}>Log Out</NavLink>
            </li>
          )
          :
          (
            <>
              <li>
                <NavLink to='/signup'>Sign Up</NavLink>
              </li>
              <li>
                <NavLink to='/signin'>Sign In</NavLink>
              </li>
            </>
          )
        }
      </ul>
    </div>
      )
    }
