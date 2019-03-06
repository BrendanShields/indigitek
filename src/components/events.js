import React, { useState, useEffect } from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import './css/card.css'


function EventsPage() {

const [events, setEvents] = useState()
const [count, setCount] = useState(0)
const x = useEffect(() => {
    const postDataToApi = async (req, res) => {
        const requestBody = { 
        query: `
            query {
                events {
                title
                description
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

console.log(x)
return (
  <Layout>
    <SEO title="Page two" />
  <div className="banner"> 
  <label> Search </label>
  <input type="search"></input>
  </div>
  <div className="masonry">
    { (events !== undefined) ? events.data.events.map((event) => 
    <div className="item">
        1
        <h4>{event.title}</h4>
        <p>{event.description}</p>
    </div>)
    : <div><h1>loading...</h1></div> }
  </div>
  </Layout>
)
}

export default EventsPage