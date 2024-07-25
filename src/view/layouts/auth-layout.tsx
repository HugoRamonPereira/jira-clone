import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <div>
      <p>This is the basic layout</p>
      <Outlet />
    </div>
  )
}