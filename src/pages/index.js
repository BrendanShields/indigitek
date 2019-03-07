/////// ESSENTIALS //////////////////////////
import React from "react"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

/////// IMAGES //////////////////////////////
import leftImage from '../images/Layer 3.png'
import background from '../images/Layer 4.png'
////// COMPONENTS //////////////////////////
import '../components/css/index.css'

import Hero from '../components/Hero'


class Home extends React.Component {
  render() {
    return (
      <div className="container">
      <Parallax pages={3} ref={ref => this.parallax = ref} style={{backgroundImage: `url(${background})`}}>
        <ParallaxLayer offset={-0.19} speed={-0.06}>
          <span onClick={() => this.parallax.scrollTo(1.07)} >
            <Hero />
          </span>
        </ParallaxLayer>

        <ParallaxLayer offset={0.91} speed={0.2}>
          <div onClick={() => this.parallax.scrollTo(2.5)}>
            <img src={leftImage} 
                 alt="indigenous fish"
                 style={{width: '40vw', minWidth: '700px', position: 'absolute', left: '0px'}} />
           
            <p style={{width: '40vw', minWidth: '500px', right: '7vw', position: 'absolute'}}> 
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
          <div style={{position: 'absolute', maxWidth: '960px', textAlign: 'center'}}>
            <h2> 
              What we do 
            </h2>
            <p> 
              Indigitek connects Indigenous network partners to relevant Training
              Partners, and best-fit Tech Community partners,
              based on location and other factors like tertiary aptitude. 
            </p>
            <iframe width="100%" height="415" src="https://www.youtube.com/embed/Li5fe2PDiY4?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </ParallaxLayer>
      </Parallax>
      </div>
    )
  }
}

export default Home