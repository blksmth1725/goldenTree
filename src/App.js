import Directory from "./components/second-item/directory.component.jsx";
import { categories } from "./models/categories.js";

const App = () => {
	return <Directory categories={categories} />;
};

export default App;
