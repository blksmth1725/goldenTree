import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./cartItemForCheckout.styles.scss";

const CartItemForCheckout = ({ cartItem }) => {
	const { imageUrl, name, quantity, price } = cartItem;
	const { clearItemFromCart, addItemToCart, removeItemFromCart } =
		useContext(CartContext);
	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);
	const clearItemFromCartHandler = () => clearItemFromCart(cartItem);

	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<div className="quantity">
				<div className="arrow" onClick={removeItemHandler}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={addItemHandler}>
					&#10095;
				</div>
			</div>
			<div className="price">${price * quantity}</div>
			<div className="remove-button" onClick={clearItemFromCartHandler}>
				&#10005;
			</div>
		</div>
	);
};

export default CartItemForCheckout;
