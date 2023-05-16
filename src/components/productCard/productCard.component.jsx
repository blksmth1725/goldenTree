import MainButton from "../buttons/mainButton.component";
import "./productCard.styles.scss";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">${price}.00</span>
			</div>
			<MainButton buttonType="inverted">Add to Cart</MainButton>
		</div>
	);
};

export default ProductCard;
