import React, { useState } from 'react';


function Form() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [current_user, setUser] = useState("");
  const token = localStorage.Authorisation
  const user = localStorage.User;

  console.log('user:', user)


  const eventSubmitHandler = (event) => {
    if (!localStorage.Authorisation) {
        console.log('please log in')
        return
    }
    event.preventDefault()
    const postDataToApi = async (req, res) => {
        const requestBody = { 
        query: `
            mutation {
                createEvent(eventInput: {title: "${title}", description: "${description}", price: ${+price}, date: "${date}", creator: "${user}"}) {
                  _id
                  title
                  description
                  date
                  price
                  creator {
                    _id
                    email
                  }
                }
              }
          `
        }
    fetch('http://localhost:3000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
        }
    })
        .then(res => {
        if (res.status !== 200 && res.status !== 201) {
            throw new Error('Failed!');
        }
        return res.json();
        })
        .then(resData => {
        this.fetchEvents();
        })
        .catch(err => {
        console.log(err);
        });
    };
    postDataToApi()
}

return (
    <form onSubmit={e => eventSubmitHandler(e)}>
     <div className="group">
    <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        type="text"
        name="firstName"
        required
     />
       <span className="highlight"></span>
      <span className="bar"></span>
      </div>
      <div className="group">      
      <input
        value={price}
        onChange={e => setPrice(e.target.value)}
        type="number"
        name="Price"
        placeholder="Price"
        required
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      </div>

      <div className="group">
      <input
        value={date}
        onChange={e => setDate(e.target.value)}
        placeholder="Date"
        type="datetime-local"
        name="Date"
        required
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      </div>
      <div className="group">
    <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        rows="5"
        name="Description"
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

