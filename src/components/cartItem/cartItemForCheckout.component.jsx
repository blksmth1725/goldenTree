import React from "react";
import DeleteButton from "../buttons/deleteButton.component";
import "./cartItemForCheckout.styles.scss";

const CartItemForCheckout = ({ imageUrl, name, quantity, price }) => {
	return (
		<div className="checkoutItem-container">
			<img className="checkout-img" src={imageUrl} alt={name} />
			<span>{name}</span>
			<div>{quantity}</div>
			<div>${price * quantity}</div>
			<DeleteButton />
		</div>
	);
};

export default CartItemForCheckout;
