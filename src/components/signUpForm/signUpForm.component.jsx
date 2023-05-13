import { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	creatUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import {
	signUpFormInputs,
	defaultSignUpFormFields,
} from "../../models/formInputs";
import MainButton from "../../components/buttons/mainButton.component";

import "./signUpForm.styles.scss";

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultSignUpFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultSignUpFormFields);
	};

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
			if (user) {
				await creatUserDocFromAuth(user, { displayName });
				resetFormFields();
			} else {
				console.log("User creation encountered an error: no user returned");
			}
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Cannot create user: Email already in use.");
			} else {
				console.log("User creation encountered an error", error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="signUpContainer">
			<h2>Dont have an account with us?</h2>
			<span>Sign Up with your email and password</span>
			<form onSubmit={handleSubmit}>
				{signUpFormInputs.map(({ id, label, name, type, required }) => {
					return (
						<div className="group" key={id}>
							<input
								className="form-input"
								required={required}
								type={type}
								onChange={handleChange}
								name={name}
								value={formFields[name]}
							/>
							{label && (
								<label
									className={`${
										formFields[name] ? "shrink" : ""
									} form-input-label`}
								>
									{label}
								</label>
							)}
						</div>
					);
				})}
				<MainButton type="submit">Sign Up</MainButton>
			</form>
		</div>
	);
};

export default SignUpForm;
