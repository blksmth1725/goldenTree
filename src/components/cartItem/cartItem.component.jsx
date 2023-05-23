import React from "react";

import "./cartItem.styles.scss";

const CartIem = ({ cartItem }) => {
	const { name, quantity } = cartItem;
	return (
		<div>
			<h2>{name}</h2>
			<span>{quantity}</span>
		</div>
	);
};

export default CartIem;
