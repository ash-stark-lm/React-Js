import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: 'Stark',
    age: 20,
  }
  return (
    <>
      <h1 className=" bg-gray-700 text-teal-200 p-4 rounded-xl mb-7">
        Tailwind Test
      </h1>
      <Card username={myObj.username} title="Gaming" btnText="Click me" />
      <Card title="News" btnText="visit me" />
    </>
  )
}

export default App
