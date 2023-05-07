import {
	signInWithGooglePopup,
	creatUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/signUpForm/signUpForm.component";

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await creatUserDocFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In Component</h1>
			<button onClick={logGoogleUser}>Sign in with Google PopUp</button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
