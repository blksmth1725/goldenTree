import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/home/homePage.component";
import NavigationBar from "./components/navigation-component/navigation.component";
import ShopComponent from "./components/shop-component/shop.component";
import SignIn from "./routes/singIn/signIn.component";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<NavigationBar />}>
				<Route index element={<HomePage />} />
				<Route path="shop" element={<ShopComponent />} />
				<Route path="signIn" element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
