import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin } from "../view/pages/signin";
import { Signup } from "../view/pages/signup";
import { Dashboard } from "../view/pages/dashboard";
import { Home } from "../view/pages/home";
import { AuthLayout } from "../view/layouts/auth-layout";
import { HomeLayout } from "../view/layouts/home-layout";
import { DashboardLayout } from "../view/layouts/dashboard-layout";

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<HomeLayout />}>
					<Route path="/" element={<Home />} />
				</Route>
				<Route element={<AuthLayout />}>
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
				</Route>
				<Route element={<DashboardLayout />}>
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}