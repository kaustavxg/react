import React, { useState } from 'react'
import Post from './Components/Post';

function App() {

  const [posts, setPosts] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [time, setTime] = useState('')

  const postComponent = posts.map(post => <Post
    name={post.name}
    date={post.date}
    venue={post.venue}
    time={post.time}    
  />)

  function addPost(){
    setPosts([...posts, {
      name: "Kaustav Gupta",
      date: "13th December 2025",
      venue: "The Taj, New Delhi",
      time: "08:00 PM onwards"
    }])
  }

  function renderPost(){

  }

  return (
    <div>
      {/* <div>{postComponent}</div> */}

      <label>Name: </label>
      <input 
        type="text" 
        placeholder='Enter Name'  
        value={name}
        onChange={() => {
          setName(name)
        }}
      />
      <br />
      <label htmlFor="date">Date: </label>
      <input 
        type="date" 
        value={date}
        onChange={() => {
          setDate(date)
        }}
      />

      <br />
      <button onClick={renderPost}>Add Post</button>
    </div>
  )
}

export default App