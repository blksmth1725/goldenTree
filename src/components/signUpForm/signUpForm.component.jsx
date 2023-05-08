import { Fragment, useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	creatUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import { formInputs, defaultFormFields } from "../../models/formInputs";

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Password Fields do not match. Please try again.");
			return;
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			console.log(user);
			await creatUserDocFromAuth(user, { displayName });
		} catch (error) {
			console.log("User creation encountered an error", error);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div>
			<h1>SignUpForm</h1>
			<form onSubmit={handleSubmit}>
				{formInputs.map(({ id, label, name, type, required }) => {
					return (
						<Fragment key={id}>
							<label>{label}</label>
							<input
								required={required}
								type={type}
								onChange={handleChange}
								name={name}
								value={formFields.value}
							/>
						</Fragment>
					);
				})}
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
