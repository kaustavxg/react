import React, { useState } from 'react'

function BgChange() {

  const [color, setColor] = useState('white')

  return (
    <div style={{backgroundColor: color, height: "100vh", width: "100vw"}} >
        
        <hr />
        <button 
            style={{backgroundColor: "red", color: "black"}}
            onClick={() => setColor("red")}    
        >
            Red
        </button>
        <hr />
        <button 
            style={{backgroundColor: "blue", color: "white"}}
            onClick={() => setColor("blue")}
        >
            Blue
        </button>
        <button 
            style={{backgroundColor: "gray", color: "white"}} 
            onClick={() => setColor("white")}
        >
            Reset
        </button>
    </div>
    
  )
}

export default BgChange