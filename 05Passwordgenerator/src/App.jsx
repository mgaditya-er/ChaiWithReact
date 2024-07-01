import { useState , useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {

  const [length , setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [showPopup, setShowPopup] = useState(false);

  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
      let pass =""
      let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed){
        str += "0123456789"
      }
      if(charAllowed){
        str += "!@#$%^&*()_+=[]{}~`|:;<>?,./"
      }
      for(let i=0; i<length; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() =>{
      passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]  )

  const handleCopyClick = () => {
    navigator.clipboard.writeText(password);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Hide popup after 2 seconds
  };

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-lg rounded-lg p-4 bg-slate-200 text-orange-200'>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
        <input type='text'
         className='outline-none w-full text-black p-2' value={password}
          placeholder='Password'
         readOnly
         ref={passwordRef}
          />

        <button onClick={handleCopyClick} 
            className='bg-slate-700 text-white p-2 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2  text-black'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min={8}
            max={20}
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
            className='cursor-pointer'
            />
            <label>Length : {length}  </label>
          </div>

          <div className='flex items-center gap-x-1 text-black'>
            <input 
            type='checkbox'
            defaultChecked={numberAllowed}
            onChange={()=>setNumberAllowed((prev) => (!prev))}
            />
            <label htmlFor='numberInput'>Numbers</label>
          
          </div>
          <div>
            <input 
            type='checkbox'
            defaultChecked={charAllowed}
            onChange={()=>setCharAllowed((prev) => (!prev))}
            />
            <label htmlFor='charInput'>Special Characters</label>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className='popup'>
          Copied to clipboard : {password}
        </div>
      )}
    </>
  )
}

export default App
