import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/home/homePage.component";
import NavigationBar from "./routes/navigation/navigation.component";
import ShopComponent from "./components/shopComponent/shop.component";
import Authentication from "./routes/auth/authentication.component";
import CheckoutComponent from "./components/checkout/checkout.component";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<NavigationBar />}>
				<Route index element={<HomePage />} />
				<Route path="shop" element={<ShopComponent />} />
				<Route path="auth" element={<Authentication />} />
				<Route path="checkout" element={<CheckoutComponent />} />
			</Route>
		</Routes>
	);
};

export default App;
