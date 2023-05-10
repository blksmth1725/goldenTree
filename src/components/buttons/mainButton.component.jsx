import "./button.styles.scss";
const BUTTON_TYPE_CLASSES = {
	google: "google",
	inverted: "inverted",
};

const MainButton = ({ children, buttonType, ...otherProps }) => {
	return (
		<button
			className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default MainButton;
