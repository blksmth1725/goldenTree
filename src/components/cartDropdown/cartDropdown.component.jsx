import MainButton from "../buttons/mainButton.component";
import "./cartDropdown.styles.scss";

const CartDropdown = () => {
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items" />
			<MainButton>Go to Check Out</MainButton>
		</div>
	);
};

export default CartDropdown;
