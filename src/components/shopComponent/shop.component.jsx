import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../productCard/productCard.component";

import "./shop.styles.scss";

const ShopComponent = () => {
	const { products } = useContext(ProductsContext);
	return (
		<div className="products-contianer">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ShopComponent;
