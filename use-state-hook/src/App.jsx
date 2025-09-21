import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  function addValue(){
  setCount(prevCounter => prevCounter + 1); // 0 -> 1
  setCount(prevCounter => prevCounter + 1); // 1 => 1 + 1 = 2
  setCount(prevCounter => prevCounter + 1); // 2 => 2 + 1 = 3
  // there is a callback in callback
  // prev is the last updated state of count 

  // setCount(count+1); 
  // setCount(count+1); 
  // setCount(count+1); 

  }

  function removeValue(){
    setCount(prevCounter => prevCounter - 1); 
  }

  return (
    <div>
      <h2 maxLength="20">Counter value: {count}</h2>
      <button onClick={addValue}>Add</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove</button>
    </div>
  )
}

export default App
