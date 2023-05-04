import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/home/HomePage.component";
import NavigationBar from "./components/navigation-component/navigation.component";
import ShopComponent from "./components/shop-component/shop.component";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<NavigationBar />}>
				<Route index element={<HomePage />} />
				<Route path="/shop" element={<ShopComponent />} />
			</Route>
		</Routes>
	);
};

export default App;
