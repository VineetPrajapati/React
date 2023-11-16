import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword]= useState("");

  const passWordRef =  useRef(null);
  
  const copyToClipBoard = useCallback( () => {
    passWordRef.current?.select();
    passWordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  }, [password])
  const passWordGenerator = useCallback( () => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "

    if(numberAllowed) str += "0987654321";
    if(charAllowed) str += "~!@#$%&*|";

    for(let i=1; i<=length; i++)
    {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
       
      setPassword(pass)
    }
  }, [length, numberAllowed,charAllowed,setPassword])
  

  useEffect(()=>{
    passWordGenerator()
  }, [length,numberAllowed, charAllowed, passWordGenerator])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg py-3 my-8 px-4 bg-gray-800 text-orange-500">
    <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-5">
        <input type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly
        ref={passWordRef}
        />

        <button onClick={copyToClipBoard} className="outline-none bg-blue-500 text-white px-3 shrink-0"
        >Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1"  
        >
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {setLength(e.target.value)}}
           />
           <label>Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked = {numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }} /> <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked = {numberAllowed}
          id="characterInput"
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }} /> <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
