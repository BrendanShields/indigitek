
import React from 'react'
import { Link } from "gatsby"

////// CSS //////////////////////////
import './css/nav.css'

function nav() {

      return (
        <div className="nav">
          <p>
            <Link to="/">Home</Link>|
            <Link to="/events">Events</Link>|
            <Link to="/">About</Link>|
            <Link to="/">Contact</Link>|
            {localStorage.User ? <Link to="/"><h3>Welcome</h3></Link> : <Link to="/login"><h3>Login</h3></Link>}
          </p>
        </div>
      )
    }
    
export default nav

