import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copyMessage, setCopyMessage] = useState('') // State to manage copy success message

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numAllowed) {
      str += '0123456789'
    }
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`'

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1)
      let char = str.charAt(index)
      pass += char
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(password)

    // Show success message
    setCopyMessage('Password copied successfully!')

    // Hide the success message after 2 seconds
    setTimeout(() => {
      setCopyMessage('')
    }, 2000)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white-500 bg-gray-800 ">
        <h1 className="text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 text-black">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-400 py-1 px-3 hover:bg-blue-600"
          >
            Copy
          </button>
        </div>
        {/* Success message for copied password */}
        {copyMessage && (
          <div className="bg-green-500 text-white text-center py-2 mb-4 rounded-md">
            {copyMessage}
          </div>
        )}
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numInput"
              onChange={(e) => setNumAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={(e) => setCharAllowed((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
