import { createContext, useState } from "react";
import { mockShopData } from "../models/mockShopData";

export const ProductsContext = createContext({
	products: [],
});

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(mockShopData);
	const value = { products };
	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};
