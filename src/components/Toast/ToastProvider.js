import { createContext, useState } from "react";
import TodoList from "./ToastList";
export const ToastContext = createContext();

export default function ToastProvider({ children }) {
	const [toasts, setToasts] = useState([]);

	const showToast = toast => {
		setToasts(prevToasts => [...prevToasts, toast]);
	};

	const closeToast = id => {
		setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
	};

	return (
		<ToastContext.Provider value={{ showToast, closeToast }}>
			{children}
			<TodoList toasts={toasts} />
		</ToastContext.Provider>
	);
}
