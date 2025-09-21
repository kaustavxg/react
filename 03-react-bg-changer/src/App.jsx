import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white"); // default color

  return (
    <div>

    
      <div className='w-full h-screen duration-200' style={{backgroundColor: color || "black"}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <button className='bg-white text-black px-4 py-2 rounded m-2' onClick={() => setColor("black")}>
              Reset
            </button>
            <button className="bg-red-700 text-white px-4 py-2 rounded m-2" onClick={() => setColor("red")}>
              Red
            </button>
            <button className="bg-green-900 text-dark-white px-4 py-2 rounded m-2" onClick={() => setColor("green")}>
              Green 
            </button>
            <button className="bg-blue-700 text-dark-white px-4 py-2 rounded m-2" onClick={() => setColor("blue")}>
              Blue
            </button>
            <button className="bg-pink-700 text-dark-white px-4 py-2 rounded m-2" onClick={() => setColor("pink")}>
              Pink
            </button>
            <button className="bg-yellow-600 text-dark-white px-4 py-2 rounded m-2" onClick={() => setColor("yellow")}>
              Yellow
            </button>
        </div>
 
      </div>
    </div>
  )
}

export default App
