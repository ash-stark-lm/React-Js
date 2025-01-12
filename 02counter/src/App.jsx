import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)
  //let [counter, setCounter] = useState(10)
  //let counter = 10
  /*
  const addValue = () => {
    counter = counter + 1 //Ui update nahi hua-> for these hooks are used
    console.log('clicked', counter)
  }*/

  const addValue = () => {
    //counter = counter + 1 // counter we defined constant so we cant assign use let
    if (counter < 20) {
      setCounter(counter + 1)
    } else {
      setCounter(20)
    }
  }
  /**
   if we do 
   const addValue=()=>{
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    } it will still update the counter by 1 only as state takes in form of batches

    so if we wanna really do it
    const addValue=()=>{
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    }
   */

  const removeValue = () => {
    //counter = counter - 1 //if use let
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      setCounter(0)
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>

      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
