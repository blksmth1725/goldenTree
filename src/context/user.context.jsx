import { createContext, useEffect, useState } from "react";
import {
	creatUserDocFromAuth,
	onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

//value you want to access
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				creatUserDocFromAuth(user);
			}
			setCurrentUser(user);
		});
		return unsubscribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
