import React, { useState } from 'react'
import Post from './Components/Post';

function App() {

  const [posts, setPosts] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [time, setTime] = useState('')

  const postComponent = posts.map((post, index) => <Post
    key={index}
    name={post.name}
    date={post.date}
    venue={post.venue}
    time={post.time}    
  />)

  function renderPost(){
    setPosts([...posts, { name, date, venue, time }])
    setName('')
    setDate('')
    setVenue('')
    setTime('')
  }

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    form: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      marginBottom: '20px'
    },
    inputGroup: {
      marginBottom: '12px'
    },
    label: {
      display: 'inline-block',
      width: '70px',
      fontWeight: '500',
      color: '#333'
    },
    input: {
      padding: '8px 12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
      width: 'calc(100% - 90px)'
    },
    button: {
      backgroundColor: 'black',
      color: 'white',
      margin: '5px 0',
      marginTop: '10px',
      borderRadius: '5px',
      padding: '10px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      width: '100%'
    },
    postsContainer: {
      margin: '10px 0',
      backgroundColor: 'black',
      color: 'white',
      padding: '10px',
      borderRadius: '8px',
      minHeight: '50px'
    }
  };

  return (
    <div style={styles.container}>
      
      <div style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Name: </label>
          <input 
            style={styles.input}
            type="text" 
            placeholder='Enter Name'  
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="date">Date: </label>
          <input 
            style={styles.input}
            type="date" 
            value={date}
            onChange={(e) => {
              setDate(e.target.value)
            }}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="venue">Venue: </label>
          <input 
            style={styles.input}
            type="text" 
            placeholder='Venue'
            value={venue}
            onChange={(e) => {
              setVenue(e.target.value)
            }}  
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="time">Time:</label>
          <input 
            style={styles.input}
            type="time"
            value={time} 
            onChange={(e) => {
              setTime(e.target.value)
            }}
          />
        </div>

        <button style={styles.button} onClick={renderPost}>Add Post</button>
      </div>

      <div style={styles.postsContainer}>
          {postComponent}
      </div>
    </div>
  )
}

export default App