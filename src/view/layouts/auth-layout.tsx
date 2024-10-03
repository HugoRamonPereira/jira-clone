import { ArrowLeft } from "lucide-react"
import { Link, Outlet } from "react-router-dom"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip"

export const AuthLayout = () => {
  return (
    <div className="w-full h-screen font-nauman-regular bg-gradient-to-r from-gray-100 to-zinc-200">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link 
              to="/"   
              className="ml-6 mt-6 w-fit border border-gray-400 hover:border-gray-600 transition-colors duration-150 p-2 rounded-lg absolute group text-gray-400"     
            >
              <ArrowLeft strokeWidth={1.5} className="group-hover:text-gray-600" />
            </Link>
          </TooltipTrigger>
          <TooltipContent align="start" alignOffset={42} className="-mb-14 ml-2 mt-2.5">
            <p>Return to home page</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Outlet />
    </div>
  )
}