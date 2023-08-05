import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItemForCheckout from "../../components/cartItemForCheckout/cartItemForCheckout.component";
import "./checkout.styles.scss";

const CheckoutComponent = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			<div className="checkout-items-list">
				{cartItems.map((cartItem) => (
					<CartItemForCheckout
						imageUrl={cartItem.imageUrl}
						name={cartItem.name}
						price={cartItem.price}
						quantity={cartItem.quantity}
						cartItem={cartItem}
					/>
				))}
			</div>
			<span className="total">Total: ${cartTotal}</span>
		</div>
	);
};

export default CheckoutComponent;
