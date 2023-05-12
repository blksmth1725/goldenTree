import Directory from "../../components/directoryComponent/directory.component";
import { categories } from "../../models/categories";

const HomePage = () => {
	return <Directory categories={categories} />;
};

export default HomePage;
