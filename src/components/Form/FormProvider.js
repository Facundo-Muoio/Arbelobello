import { createContext, useState } from "react";
import { validateRegex } from "../../helpers/helpers.js";
import Form from "../Form/Form";

export const FormContext = createContext();

export default function FormProvider({
	children,
	handlerSubmit,
	labelBtnSend,
	spinner,
}) {
	const [fields, setFields] = useState({});
	const [errors, setErrors] = useState({});

	function setError(name, message) {
		setErrors(prevErrors => ({
			...prevErrors,
			[name]: message,
		}));
	}

	function removeError(name) {
		setErrors(prevErrors => {
			const updateErrors = { ...prevErrors };
			delete updateErrors[name];
			return updateErrors;
		});
	}

	const validateField = (name, value) => {
		if (!value) {
			const message = `El campo ${name} es obligatorio`;
			setError(name, message);
		} else if (value) {
			validateRegex(name, value, setError, removeError);
		}
	};

	const handleChange = (name, value) => {
		setFields(prevFields => ({ ...prevFields, [name]: value }));
	};

	return (
		<FormContext.Provider
			value={{ fields, setFields, errors, handleChange, validateField }}
		>
			<Form
				handlerSubmit={handlerSubmit}
				labelBtnSend={labelBtnSend}
				spinner={spinner}
			>
				{children}
			</Form>
		</FormContext.Provider>
	);
}
