import React from "react";
import { ReactComponent as TrashCan } from "../../assests/trashCanIcon.svg";
import "./delete-button.styles.scss";

const DeleteButton = () => {
	return (
		<div className="btn-container">
			<button className="trashCan-btn">
				<TrashCan />
			</button>
		</div>
	);
};

export default DeleteButton;
