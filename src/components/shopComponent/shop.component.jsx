import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../productCard/productCard.component";
import "./shop.styles.scss";

const ShopComponent = () => {
	const { categoriesMap } = useContext(CategoriesContext);

	return (
		<Fragment>
			{Object.keys(categoriesMap).map((title) => (
				<Fragment key={title}>
					<h2>{title}</h2>
					<div className="products-contianer">
						{categoriesMap[title].map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</Fragment>
			))}
		</Fragment>
	);
};

export default ShopComponent;
