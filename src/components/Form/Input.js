import { useContext } from "react";
import { FormContext } from "./FormProvider.js";

export default function Input({ name, type, required, placeHolder }) {
	const { fields, handleChange, validateField, errors } =
		useContext(FormContext);

	const handleOnBlur = value => {
		validateField(name, value);
	};

	return (
		<div className="container-input">
			<input
				type={type}
				name={name}
				value={fields[name] ? fields[name] : ""}
				onChange={event => handleChange(name, event.target.value)}
				onBlur={event => handleOnBlur(event.target.value)}
				required={required}
				placeholder={placeHolder ? placeHolder : ""}
				className={errors[name] && "input-error"}
			></input>
			<label>{name}</label>
			{errors[name] && <span className="span-error">{errors[name]}</span>}
		</div>
	);
}
