import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Hero from '../components/Hero'
import Login from '../components/forms/login'
import SignUp from '../components/forms/signup'
class IndexPage extends Component {
  render() {
     return(
  <Layout>
 
  <Parallax pages={3} ref={ref => this.parallax = ref} scrolling={false}>
    <ParallaxLayer offset={0.08} speed={0.05} style={{backgroundColor: 'teal'}}>
  
    <span onClick={() => this.parallax.scrollTo(1.07)} >
      <Hero />
      </span>

    </ParallaxLayer>
  <ParallaxLayer offset={1.5} speed={2}>
  <span onClick={() => this.parallax.scrollTo(2.5)}>
  <button> scroll </button>
  </span>
  <h3>Sign Up</h3> 
  <Login />
<hr/>

  <h3>Login</h3>
  <SignUp />
  
  </ParallaxLayer>

  <ParallaxLayer offset={2.5} speed={2}>
  <span onClick={() => this.parallax.scrollTo(0)}>
<h1> Events </h1>
<Link to="/events">Whats on?</Link>
  </span>
  </ParallaxLayer>

  </Parallax>

  </Layout> 

      )
    }
  }

export default IndexPage
