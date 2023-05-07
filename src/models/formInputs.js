export const formInputs = [
	{
		id: 1,
		label: "Display Name",
		type: "text",
		name: "displayName",
		required: true,
	},
	{
		id: 2,
		label: "Email",
		type: "email",
		name: "email",
		required: true,
	},
	{
		id: 3,
		label: "Password",
		type: "password",
		name: "password",
		required: true,
	},
	{
		id: 4,
		label: "Confirm Password",
		type: "password",
		name: "confirmPassword",
		required: true,
	},
];

export const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};
