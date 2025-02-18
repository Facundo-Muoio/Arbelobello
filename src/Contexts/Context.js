import { useState, createContext } from "react";
export const FloatingWpContext = createContext(null);

export default function FloatingWhatsappProvider({ children }) {
	const [FloatingWpVisibility, setFloatingWhatsappVisibility] = useState(false);

	return (
		<FloatingWpContext.Provider
			value={{ FloatingWpVisibility, setFloatingWhatsappVisibility }}
		>
			{children}
		</FloatingWpContext.Provider>
	);
}
