import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header"

export function Home() {
	return (
		<div className="bg-yellow-400 h-screen">
			<div className="bg-blue-400 flex flex-col justify-between min-h-full">	
				<Header />
				<h1>Initial Page</h1>
				<div className="h-56 w-56 bg-yellow-400">
					This is the first page you will see
				</div>
				<Footer />
			</div>
		</div>
	);
}

