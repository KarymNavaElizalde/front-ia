
import {Navigate, Outlet} from "react-router-dom"

export const ProtectedRoute = ({getToken})=> {

  const token = getToken()

  if (!token) {
    return <Navigate to="/home" />
  }  
  return <Outlet />
}