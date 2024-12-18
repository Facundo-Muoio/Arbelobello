import { useContext } from "react";
import "./Form.css";
import { FormContext } from "./FormProvider";

import { lineSpinner } from "ldrs";

export default function Form({
	children,
	handlerSubmit,
	labelBtnSend,
	spinner,
}) {
	const { setFields, errors } = useContext(FormContext);

	lineSpinner.register();

	return (
		<form
			className="form"
			onSubmit={async event => {
				await handlerSubmit(event, errors);
				setFields({});
			}}
		>
			{children}
			{spinner ? (
				<div className="container-spinner">
					<l-line-spinner
						size="40"
						stroke="3"
						speed="1"
						color="#f1ebdf"
					></l-line-spinner>
				</div>
			) : (
				<button className="btn-form" type="submit">
					{labelBtnSend ? labelBtnSend : "ENVIAR"}
				</button>
			)}
		</form>
	);
}
