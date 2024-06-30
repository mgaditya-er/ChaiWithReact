import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  const [count, setCount] = useState(0)
  const addValue = () => {
    
    setCount(count + 1)
    // interview question 
    // setCount(count + 1)
    // setCount(count + 10)
    // setCount(count -5)

    // setCount(prevcount => prevcount + 1)
    // setCount(prevcount => prevcount + 1)
    
    console.log(count)
  }

  const removeValue = () => {
    if(count > 0)
    {
      setCount(count - 1)
    }
    console.log(count)
  }
  return (
    <>
      
     
     
     <button 
     onClick={addValue}>Add Values {count}</button>
     <h1>Counter : {count}</h1>
     
    <br/>
    <button
    onClick={removeValue}>Remove Value {count}</button>

    </>
  )
}

export default App
