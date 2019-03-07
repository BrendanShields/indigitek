import React, { useState, useEffect } from 'react'
import { useSpring, animated as a} from 'react-spring'
import Layout from "../components/layout"
import SEO from "../components/seo"
import './css/card.css'
import Form from './forms/create_event_form'

function EventsPage() {

const [events, setEvents] = useState()
const [initial, setinit] = useState(true)
const [user, setUser] = useState()
const [opened, set] = useState(false)

// check if user logged in.
if (localStorage.User && !user) {
  setUser(localStorage.User)
}

// Request All Events
    useEffect(() => {
    const postDataToApi = async (req, res) => {
    const requestBody = { 
        query: `
            query {
                events {
                title
                description
                price
                creator {
                    first_name
                    surname
                }
                }
            }
          `
        }
    fetch('http://localhost:3000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.status !== 200 && res.status !== 201) {
            throw new Error('Failed!');
        } return res.json();
    }).then(resData => {
        setEvents(resData)
        console.log(resData.data)
    }).catch(err => {
        console.log(err)
    })   
  }
  return postDataToApi()
}, [])


return (
  <Layout>
    <SEO title="Page two" />
    <Form />
  <div className="banner"> 
  </div>
  <a.div style={props}>
    <h1> header </h1>
    <p> this is a paragraph </p>
  </a.div>
  <div className="masonry">
    { (events !== undefined) ? events.data.events.map((event) => 
    <div className={"item"}>
        1 <button onClick={() => ret(event)}>X</button>
        <h4>{event.title}</h4>
        <p>{event.description}</p>
    </div>)
    : <div><h1>loading...</h1></div> }
  </div>
  </Layout>
)
}

export default EventsPage