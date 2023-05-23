import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import MainButton from "../buttons/mainButton.component";
import "./productCard.styles.scss";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);
	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">${price}.00</span>
			</div>
			<MainButton buttonType="inverted" onClick={addProductToCart}>
				Add to Cart
			</MainButton>
		</div>
	);
};

export default ProductCard;
