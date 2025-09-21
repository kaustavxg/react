import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  function addValue(){
   setCount(prev => prev + 1);

  }

  function removeValue(){
    setCount(prev => prev - 1);
  }

  return (
    <div>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove</button>
    </div>
  )
}

export default App
