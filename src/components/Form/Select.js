import { useContext } from "react";
import { FormContext } from "./FormProvider.js";

export default function Select({
	name,
	required,
	children,
	placeHolder,
	defaultValue,
	readOnly,
}) {
	const { fields, handleChange, errors, validateField } =
		useContext(FormContext);

	return (
		<>
			<select
				name={name}
				value={fields[name] ? fields[name] : defaultValue}
				onChange={event => handleChange(name, event.target.value)}
				required={required}
				placeholder={placeHolder ? placeHolder : ""}
				readOnly={readOnly && readOnly}
			>
				{children.map(option => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{errors[name] && <span className="span-error">{errors[name]}</span>}
		</>
	);
}
