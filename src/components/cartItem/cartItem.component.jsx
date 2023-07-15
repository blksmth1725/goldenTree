import React from "react";

import "./cartItem.styles.scss";

const CartIem = ({ cartItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;
	return (
		<div className="cartItem-container">
			<img src={imageUrl} alt={name} />
			<div className="item-details">
				<span className="name">{name}</span>
				<span className="price">
					{quantity} x ${price}
				</span>
			</div>
		</div>
	);
};

export default CartIem;
