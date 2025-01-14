import { useParams } from 'react-router-dom'
function User() {
  const { userid } = useParams()
  return (
    <div
      className="text-2xl bg-gray-600 text-white text-center
  "
    >
      User: {userid}
    </div>
  )
}
export default User
