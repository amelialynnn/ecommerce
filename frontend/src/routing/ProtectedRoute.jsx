import { Outlet, Navigate } from 'react-router-dom'
import { getToken } from '../helpers'

const ProtectedRoute = () => {
  const authToken = getToken()

  if (!authToken) {
    return <Navigate to="/" />
  }

  return <Outlet />
}

export default ProtectedRoute
