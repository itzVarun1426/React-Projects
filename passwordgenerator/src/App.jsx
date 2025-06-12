import { useCallback, useEffect, useState ,useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [password, setPassword] = useState("");

   const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) str += "0123456789";
    if (includeCharacters) str += "!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      password += str.charAt(randomIndex);
    }
    setPassword(password);
  }, [
    length,
    includeNumbers,
    includeCharacters,
    includeUppercase,
    setPassword,
  ]);
  useEffect(()=>{
    passwordGenerator();
  },[passwordGenerator, includeNumbers , includeCharacters , includeUppercase, length])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-2xl text-center my-3">
          Password generator
        </h1>
        <div className="flex shadow rounded-g overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" 
          onClick={() => {
            passwordRef.current.select();
            window.navigator.clipboard.writeText(passwordRef.current.value);
            alert("Password copied to clipboard!");
          }}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange = {
                (e) => setLength(Number(e.target.value))
              }
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeNumbers}
              id="numberInput"
              onChange={(e) =>{
                setIncludeNumbers((prev) => !prev);
                
              }}
             
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeCharacters}
              id="characterInput"
              onChange={(e) =>{
                setIncludeCharacters((prev) => !prev);
                
              }}
    
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeUppercase}
              id="uppercaseInput"
              onChange={(e) =>{
                setIncludeUppercase((prev) => !prev);

              }}
            />
            <label htmlFor="uppercaseInput">Uppercase</label>
            </div>
        </div>
      </div>
    </>
  );
}
export default App;
