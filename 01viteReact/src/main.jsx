import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'
const user = 'Stark'

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'Click me to visit google',
  user
)

const anotherElement = React.createElement('h1', {}, 'Another World')

createRoot(document.getElementById('root')).render(
  <div>
    <App />
    {reactElement}
    <br />
    {user}
    {anotherElement}
  </div>
)
