
import React, { useState, useEffect } from 'react'
import { useSpring, Keyframes, animated as a} from 'react-spring'
import { Link } from "gatsby"
import './css/nav.css'
import delay from 'delay'
function nav() {
    const [opened, set] = useState(false)
    const [initial, setinit] = useState(true)

    const props = useSpring({ 
            to: async (next, cancel) => {
            if (!opened) {
            await next({ zIndex: '100', position: 'absolute', top: '0%', left: '0%', height: '50%', width: 
            '100%', backgroundColor: 'rgba(0,0,0,1)'})
            setinit(false)
            } else if (opened && initial) {
            await delay(6000)
            await next({ zIndex: '100', position: 'absolute', left: '0%', top: '-42%', height: '50%', width: 
            '100%', background: 'antiquewhite'})
            setinit(false)
            } else {
            await next({ zIndex: '100', position: 'absolute', left: '0%', top: '-42%', height: '50%', width: 
            '100%', backgroundColor: 'antiquewhite'})
            }
        }
    })

    
      useEffect(() => {
          setTimeout(set(true));
      }, []);

      return (
      <div className="nav">
        <p>
            <Link to="/">Home</Link>|
            <Link to="/events">Events</Link>|
            <Link to="/">About</Link>|
            <Link to="/">Contact</Link>|
            {localStorage.User ? <Link to="/"><h3>Welcome {localStorage.User}</h3></Link> : <Link to="/login"><h3>Login</h3></Link>}
        </p>
      </div>
      )
    }
export default nav

