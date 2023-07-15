import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItemForCheckout from "../cartItem/cartItemForCheckout.component";

const CheckoutComponent = () => {
	const { cartItems } = useContext(CartContext);

	return (
		<div>
			{cartItems.map((cartItem) => (
				<CartItemForCheckout
					imageUrl={cartItem.imageUrl}
					name={cartItem.name}
					price={cartItem.price}
					quantity={cartItem.quantity}
				/>
			))}
		</div>
	);
};

export default CheckoutComponent;
