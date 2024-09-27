import { Outlet } from "react-router-dom"
import { Header } from "../components/header/header"
import { Footer } from "../components/footer/footer"

export const HomeLayout = () => {
  return (
    <div 
      className="bg-gradient-to-r from-gray-100 to-zinc-200"
    >
      <div className="flex flex-col w-full max-w-[1400px] mx-auto justify-between">
        <Header />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
