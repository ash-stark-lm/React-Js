import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  //const [data, setData] = useState({})
  //   useEffect(() => {
  //     fetch('https://api.github.com/users/ash-stark-lm')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data)
  //       })
  //   }, [])
  return (
    <div className=" bg-gray-600 text-white text-center m-4 p-4 text-3xl ">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git pic" width={300} />
    </div>
  )
}
export default Github

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/ash-stark-lm')
  return res.json()
}
