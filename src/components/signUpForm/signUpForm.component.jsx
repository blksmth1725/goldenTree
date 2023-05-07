import { Fragment, useState } from "react";
import { formInputs, defaultFormFields } from "../../models/formInputs";

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div>
			<h1>SignUpForm</h1>
			<form onSubmit={() => {}}>
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
