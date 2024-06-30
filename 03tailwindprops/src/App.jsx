import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black first-letter:uppercase p-4 rounded-xl mb-4'>Tailwind Test</h1>
      
      <Card username="Aditya" btntext="Click me"/>
      <Card username="Yash" btntext="Visit me"/>
      <Card username="Rahul" />
      

      
      </>
  )
}

export default App
