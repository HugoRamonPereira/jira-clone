import { ArrowLeft } from "lucide-react"
import { Link, Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <div className="w-full h-screen font-nauman-regular relative bg-gradient-to-r from-gray-100 to-zinc-200">
      <Link 
        to="/"   
        className="w-fit border border-gray-400 hover:border-gray-600 transition-colors duration-150 p-2 rounded-lg absolute left-6 top-6 group text-gray-400"     
      >
        <ArrowLeft strokeWidth={1.5} className="group-hover:text-gray-600" />
      </Link>
      <Outlet />
    </div>
  )
}