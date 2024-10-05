import { Outlet } from "react-router-dom"
import { DashboardHeader } from "../components/dashboard-header"

export const DashboardLayout = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="bg-violet-300 w-72 p-4">Kanban Sidebar</div>
      <div className="w-full">
        <div className="h-14 flex items-center px-5 bg-cyan-500">
          <DashboardHeader />
        </div>
        <div className="flex flex-col flex-1 p-5 bg-blue-500 h-[calc(100%-56px)]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}