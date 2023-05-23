import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

import "./cartIcon.styles.scss";

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);

	const toggleCart = () => setIsCartOpen(!isCartOpen);

	return (
		<div className="cart-icon-container" onClick={toggleCart}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default CartIcon;
