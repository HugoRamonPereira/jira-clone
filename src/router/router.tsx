import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin } from "../view/pages/signin";
import { Signup } from "../view/pages/signup";
import { Dashboard } from "../view/pages/dashboard";
import { Home } from "../view/pages/home";

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/dashboard" element={<Dashboard />} />

				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}