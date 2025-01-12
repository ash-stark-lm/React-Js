function Card({ username, title, btnText }) {
  //console.log(props)
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mb-7">
      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1722096703718-a04f14ecde52?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MzAwJTIweCUyMDIwMHxlbnwwfHwwfHx8MA%3D%3D"
        alt="Random Unsplash Image"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {` ${username} ${title}`}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-2">
          This is a simple card description. The colors adjust based on light or
          dark mode.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
          {btnText || 'Click me'}
        </button>
      </div>
    </div>
  )
}
export default Card
