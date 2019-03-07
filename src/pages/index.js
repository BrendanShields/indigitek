/////// ESSENTIALS //////////////////////////
import React, { Component } from "react"
import { Link } from "gatsby"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

/////// IMAGES //////////////////////////////
import leftImage from '../images/Layer 3.png'

////// COMPONENTS //////////////////////////
import Hero from '../components/Hero'


class Home extends React.Component {
  render() {
    return (
      <Parallax pages={3} ref={ref => this.parallax = ref}>
        <ParallaxLayer offset={-0.19} speed={-0.06} style={{backgroundColor: 'teal'}}>
          <span onClick={() => this.parallax.scrollTo(1.07)} >
            <Hero />
          </span>
        </ParallaxLayer>

        <ParallaxLayer offset={0.98} speed={0.2}>
          <div onClick={() => this.parallax.scrollTo(2.5)}>
            <img src={leftImage} alt="indigenous fish" style={{height: '700px', position: 'absolute', left: '0px'}} />
            <p style={{maxWidth: '500px', right: '7vw', position: 'absolute'}}> 
              Today  ATSI people makeup around 0% of the tech industry, instead selecting
              professions that benefit their communities i.e. health, education and government 
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.40} speed={0.0}>
          <div style={{position: 'absolute', right: '5vw', maxWidth: '500px'}}>
            <p> 
              With only 43% of Aboriginal children graduate High School with one STEM subject. 
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.98} speed={0.5}>
          <div style={{position: 'absolute', right: '15%', maxWidth: '960px', textAlign: 'center'}}>
            <h2> 
              What we do 
            </h2>
            <p> 
              Indigitek connects Indigenous network partners to relevant Training
              Partners, and best-fit Tech Community partners,
              based on location and other factors like tertiary aptitude. 
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.98} speed={0.5}>
        </ParallaxLayer>
      </Parallax>
    )
  }
}

export default Home