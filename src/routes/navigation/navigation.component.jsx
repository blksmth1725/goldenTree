import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";

import { ReactComponent as Logo } from "../../assests/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const NavigationBar = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<Logo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="shop">
						Shop
					</Link>
					{currentUser ? (
						<Link className="nav-link" to="auth" onClick={signOutUser}>
							Sign Out
						</Link>
					) : (
						<Link className="nav-link" to="auth">
							Sign In
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default NavigationBar;
