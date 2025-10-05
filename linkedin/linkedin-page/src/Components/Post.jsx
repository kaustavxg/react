import React from 'react'

function Post({name, date, venue, time}) {
  const styles = {
    container: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '12px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    name: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: '#333'
    },
    detail: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '4px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.name}>
        Name: {name}
      </div>
      <div style={styles.detail}>
        Date: {date}
      </div>
      <div style={styles.detail}>
        Venue: {venue}
      </div>
      <div style={styles.detail}>
        Time: {time} 
      </div>
    </div>
  )
}

export default Post