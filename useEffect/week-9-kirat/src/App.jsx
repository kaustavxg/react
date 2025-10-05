import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  function increaseCounter() {
    setCount(prev => prev + 1);
  }

  function visibility(){
    setIsVisible(prev => !prev)
  }

  useEffect(() => {
    const interval = setInterval(increaseCounter, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const oaky = setInterval(visibility, 5000)

    return () => clearInterval(oaky)
  }, [])

  return (
    <div>
      <h1>useEffect</h1>
      <span>{count}</span>
      <hr />
      {isVisible ? (<span>I am visible for 5 seconds</span>) : <span>NOT VISIBLE</span>}
    </div>
  );
}

export default App;
