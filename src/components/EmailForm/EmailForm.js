import Input from "../Form/Input";
import "./EmailForm.css";
import FormProvider from "../Form/FormProvider";
import { useState, useRef, useContext } from "react";
import Logo from "../../images/logo.png";
import { IoMdClose } from "react-icons/io";
import emailjs from "emailjs-com";
import { generateUniqueId } from "../../helpers/helpers";
import { ToastContext } from "../Toast/ToastProvider";

export default function EmailForm({ isOpen, setIsOpen }) {
	const dialogRef = useRef();
	const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState();
	const { showToast } = useContext(ToastContext);

	if (dialogRef.current) {
		if (isOpen) {
			dialogRef.current.showModal();
		} else {
			dialogRef.current.close();
		}
	}

	const handlerSubmit = (event, errors) => {
		event.preventDefault();
		if (Object.keys(errors).length === 0) {
			setIsLoading(true);
			emailjs
				.sendForm(
					process.env.SERVICE_ID,
					process.env.CONTACTO_TEMPLATE_ID,
					event.target,
					process.env.EMAIL_JS_PUBLIC_KEY
				)
				.then(
					result => {
						setIsOpen(false);
						const id = generateUniqueId();
						const message = "Su Mensaje fue enviado.";
						showToast({ id, message });
					},
					error => {
						console.log(error.text);
					}
				)
				.finally(() => {
					setIsLoading(false);
					event.target.reset();
				});
		}
	};

	const handleOnBlur = (name, value) => {
		if (!value) {
			const message = `El campo ${name} es obligatorio`;
			setErrors(prevErrors => ({ ...prevErrors, [name]: message }));
		} else {
			const oldErrors = { ...errors };
			delete oldErrors[name];
			setErrors(oldErrors);
		}
	};

	const handlerClickModal = () => setIsOpen(false);
	const handlerKeyDown = event =>
		event.code === "Escape" ? setIsOpen(false) : "";

	return (
		<dialog
			className="container-email-form"
			ref={dialogRef}
			onKeyDown={handlerKeyDown}
		>
			<IoMdClose className="close-btn" onClick={handlerClickModal} />
			<FormProvider handlerSubmit={handlerSubmit} spinner={isLoading}>
				<div className="wraper-logo-form">
					<img
						src={Logo}
						alt="logo"
						loading="lazy"
						decoding="async"
						className="logo-form"
					/>
					<h2>Arbelobello</h2>
					<h3>CASA SERRANA</h3>
				</div>
				<Input name="Nombre" type="text" required={true} />
				<Input name="Apellido" type="text" required={true} />
				<Input name="Email" type="email" required={true} />
				<Input name="Telefono" type="tel" required={true} />
				<div className="container-textArea-email-form">
					<textarea
						name="Mensaje"
						onBlur={event => handleOnBlur("Mensaje", event.target.value)}
						className={errors["Mensaje"] && "input-error"}
					></textarea>
					<label>Mensaje</label>
					{errors["Mensaje"] && (
						<span className="span-error">{errors["Mensaje"]}</span>
					)}
				</div>
			</FormProvider>
		</dialog>
	);
}
