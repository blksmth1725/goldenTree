import { useState } from "react";
import {
	signInWithGooglePopup,
	creatUserDocFromAuth,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import {
	signInFormInputs,
	defaultSignInFormFields,
} from "../../models/formInputs";
import MainButton from "../buttons/mainButton.component";

import "./signInForm.styles.scss";

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultSignInFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultSignInFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			resetFormFields();
			console.log(response);
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("Password provided does not match our records");
					break;
				case "auth/user-not-found":
					alert("Email provided does not match our records");
					break;
				default:
					console.log(error);
			}
			console.log("Invalid Credentials", error);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await creatUserDocFromAuth(user);
	};

	return (
		<div className="signInContainer">
			<h2>Already have an account with us?</h2>
			<span>Sign Up with your email and password</span>
			<form onSubmit={handleSubmit}>
				{signInFormInputs.map(({ id, label, name, type, required }) => {
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
				<div className="buttons-container">
					<MainButton type="submit">Sign In</MainButton>
					<MainButton
						type="button"
						buttonType="google"
						onClick={signInWithGoogle}
					>
						Google Sign In
					</MainButton>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
