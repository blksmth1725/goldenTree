import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import MainButton from "../buttons/mainButton.component";
import CartIem from "../cartItem/cartItem.component";
import "./cartDropdown.styles.scss";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartIem key={item.id} cartItem={item} />
				))}
			</div>
			<MainButton>Go to Check Out</MainButton>
		</div>
	);
};

export default CartDropdown;
