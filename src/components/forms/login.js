import React, { useState } from 'react';


function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [api, setAPI] = useState()

  const submitHandler = (event) => {
    event.preventDefault()
    const postDataToApi = async (req, res) => {
        const requestBody = { 
        query: `
            query {
                login(email: "${email}", password: "${password}") {
                    userId
                    token
                    tokenExpiration
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
        localStorage.setItem('Authorisation', resData.data.login.token)
        localStorage.setItem('User', resData.data.login.userId)
        window.location.reload()
    }).catch(err => {
        console.log(err)
    })   
}
    postDataToApi()
}

console.log(localStorage.Authorisation)

return (
    
    <form onSubmit={e => submitHandler(e)}>
      <div className="group">      
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      </div>

      <div className="group">
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      </div>
<button type="submit">Submit</button>
    </form>
  );
}

export default Form;


