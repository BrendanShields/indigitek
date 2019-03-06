
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
            '100%', background: '#E1F5FE'})
            setinit(false)
            } else {
            await next({ zIndex: '100', position: 'absolute', left: '0%', top: '-42%', height: '50%', width: 
            '100%', backgroundColor: '#E1F5FE'})
            }
        }
    })

    
      useEffect(() => {
          setTimeout(set(true));
      }, []);

      return (
      <div>
      <a.div className="nav" style={props}>
        <ul style={{height: '100%', color: 'white', textAlign: 'center', padding: '10%'}}>
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/events"><h3>Events</h3></Link>
        <Link to="/"><h3>About</h3></Link>
        <Link to="/"><h3>Contact</h3></Link>
            <div style={{position: 'absolute', textAlign: 'left', bottom: '3%', verticalAlign: 'bottom', left: '4px', color: 'black'}}><h3 style={{fontSize: '2.2rem'}}>INDIGITEK</h3></div>
        </ul> 
        <span style={{position: 'absolute', right: '0px', bottom: '.4%'}}onClick={() => set(state => !state)} > <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48'
height='48'>
    <g id='surface1' fill='#607d8b'>
        <path d='M 6 22 L 42 22 L 42 26 L 6 26 Z' />
        <path d='M 6 10 L 42 10 L 42 14 L 6 14 Z' />
        <path d='M 6 34 L 42 34 L 42 38 L 6 38 Z' />
    </g>
</svg> </span>
      </a.div> 
      
      </div>
      )
    }
export default nav

