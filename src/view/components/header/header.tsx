import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex w-full max-w-[1400px] h-14 mx-auto items-center justify-between">
      <div className="font-nauman-demi-bold">
        Logo
      </div>
      <div className="flex gap-6 font-nauman-regular">
        <div className="flex gap-6">
          <Link 
          to="/signin" 
          className="text-gray-600 hover:text-black transition-colors duration-150"
        >
          Sign in
        </Link>
        <Link 
        to="/signup" 
        className="text-gray-600 hover:text-black transition-colors duration-150"
        >
          Sign up
        </Link>
        </div>
        <div>
          Avatar
        </div>
      </div>
    </header>
  )
}