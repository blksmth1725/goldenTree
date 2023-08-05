import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import MainButton from "../buttons/mainButton.component";
import CartIem from "../cartItem/cartItem.component";
import "./cartDropdown.styles.scss";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckout = (e) => {
		e.preventDefault();
		navigate("/checkout");
	};

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartIem key={item.id} cartItem={item} />
				))}
			</div>
			<MainButton onClick={goToCheckout}>Go to Check Out</MainButton>
		</div>
	);
};

export default CartDropdown;
