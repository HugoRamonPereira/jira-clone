import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-between h-14 font-nauman-regular">
      <div className="font-nauman-demi-bold">
        Logo
      </div>
      <div className="flex gap-6">
        <Link to="">About Us</Link>
        <Link to="">Social Media</Link>
        <Link to="">Contact</Link>
      </div>
      <div className="flex items-end">
        {year}
        &nbsp; - All rights reserved
      </div>
    </footer>
  )
}