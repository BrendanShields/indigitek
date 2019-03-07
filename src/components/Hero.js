import React from 'react'

// css
import '../components/css/hero.css'
import topRight from '../images/Untitled-1.jpg'
import Nav from './nav'

export default () => (

<div className = "hero-container"
     style = {{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
  }}>
<div className="hero-center-text" style={{zIndex: '100', backgroundColor: "white"}}>
<Nav />
  <h2>INDIGI<span>TEK</span></h2>
  <p> Our mission to increase technology employment pathways for ATSI people and create 300 jobs for them within industry by 2022 </p>
</div>

<img src={topRight} alt="indigenous art" style={{position: 'absolute', width: "50vw", minWidth: '700px', right: '0px', top: 'px;'}}/>
</div>
)
