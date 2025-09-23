import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(""); // empty password 

  // useRef hook
  const passwordRef = useRef(null); // i want to manipulate with my button, so i need some reference for the same 

  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      console.log("number allowed");
      
      str += "0123456789"
    }
    if(charAllowed){
      console.log("char allowed");
      
      str += "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~"
    }

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1) // random string creation

      pass += str.charAt(char)

    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])

  //! useCallback function ko memorise krta hai, ho skta hai poora kare, ya parts mein recognise kare - it depends

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  //! abhi ke liye useEffect mein itna hi hai ki page first time jab load hoga toh run krega
  //! fir jab bhi dependency mein kuch change hoga toh firse run krega

  return (
    <div>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50'>
          <input 
            type="text" 
            value={password}
            className='outline-none w-full py-1 px-3'
            readOnly
            placeholder='password'
            ref={passwordRef}
          />
          <button 
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-900 active:bg-blue-600 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label> 
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={charAllowed}
              id="charcterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
