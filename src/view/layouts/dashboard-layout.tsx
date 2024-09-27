import { Outlet } from "react-router-dom"

export const DashboardLayout = () => {
  return (
    <div className="w-full h-screen bg-green-200 relative">
      <Outlet />
    </div>
  )
}