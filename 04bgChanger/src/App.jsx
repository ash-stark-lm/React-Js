import { useState } from 'react'

const ColorChanger = () => {
  const [bgColor, setBgColor] = useState('bg-gray-500') // Default background color

  const changeColor = (color) => {
    setBgColor(color)
  }

  return (
    <div className={`min-h-screen ${bgColor} flex justify-center items-center`}>
      <div className="text-center p-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Choose a Background Color
        </h1>
        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => changeColor('bg-red-500')}
            className="px-4 py-2 text-white font-medium rounded-md bg-red-500 border-2 border-red-700 hover:bg-red-600"
          >
            Red
          </button>
          <button
            onClick={() => changeColor('bg-blue-500')}
            className="px-4 py-2 text-white font-medium rounded-md bg-blue-500 border-2 border-blue-700 hover:bg-blue-600"
          >
            Blue
          </button>
          <button
            onClick={() => changeColor('bg-green-500')}
            className="px-4 py-2 text-white font-medium rounded-md bg-green-500 border-2 border-green-700 hover:bg-green-600"
          >
            Green
          </button>
          <button
            onClick={() => changeColor('bg-yellow-500')}
            className="px-4 py-2 text-white font-medium rounded-md bg-yellow-500 border-2 border-yellow-700 hover:bg-yellow-600"
          >
            Yellow
          </button>
          <button
            onClick={() => changeColor('bg-purple-500')}
            className="px-4 py-2 text-white font-medium rounded-md bg-purple-500 border-2 border-purple-700 hover:bg-purple-600"
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  )
}

export default ColorChanger
