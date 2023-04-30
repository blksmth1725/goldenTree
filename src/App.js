import CategoryItem from "./components/category-item/category-item.component.jsx";
import { categories } from "./models/categories.js";
import "./scss/categories.styles.scss";

const App = () => {
	return (
		<div className="categories-container">
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
};

export default App;
