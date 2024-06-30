import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  const changeColor = (getcolor) => {
    setColor(getcolor)
  }
  return (
    <div className="w-full h-screen duration-200" 
    style = {{background: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
        <div className='flex flex-wrap justify-center gap-3 bg-white shadow-lg p-3 rounded-2xl'>

        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{setColor("red")}}>Red</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{setColor("blue")}}>Blue</button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{setColor("green")}}>Green</button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{setColor("yellow")}}>Yellow</button>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{setColor("purple")}}>Purple</button>
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{setColor("pink")}}>Pink</button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{setColor("gray")}}>Gray</button>
        <button className="bg-black-500 hover:bg-black-700 text-black font-bold py-2 px-4 rounded-full" onClick={()=>{setColor("black")}}>Black</button>
        </div>
      </div>
    </div>

  )
}

export default App
