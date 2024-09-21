import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex w-full max-w-[1400px] bg-blue-500 mx-auto justify-between">
      <div>
        Logo
      </div>
      <div className="flex">
        <div>
          <Link to="/signin">Sign in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
        <div>
          Avatar
        </div>
      </div>
    </header>
  )
}