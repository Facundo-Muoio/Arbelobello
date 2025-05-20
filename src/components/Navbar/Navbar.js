import "./Navbar.css";
import "react-datepicker/dist/react-datepicker.css";
import { RxArrowRight } from "react-icons/rx";
import { useContext, useEffect, useRef, useState } from "react";
import DataPicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale/es";
import { ToastContext } from "../Toast/ToastProvider";
import Modal from "../Modal/Modal";
import FormProvider from "../Form/FormProvider";
import Input from "../Form/Input";
import SelectNav from "../SelectNav/SelectNav";
import { formatedDate, generateUniqueId } from "../../helpers/helpers";
import emailjs from "emailjs-com";
registerLocale("es", es);
import Logo from "../../images/logo.png";

// Default values shown
export default function Navbar() {
	const [checkInDate, setCheckInDate] = useState();
	const [checkOutDate, setCheckOutDate] = useState();
	const [capacidad, setCapacidad] = useState({});
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const liCheckIn = useRef();
	const liCheckOut = useRef();

	const { showToast } = useContext(ToastContext);

	const handlerClickOutside = event => {
		if (liCheckIn.current && !liCheckIn.current.contains(event.target)) {
			document.querySelector("body").classList.remove("no-scroll");
		}
		if (liCheckOut.current && !liCheckOut.current.contains(event.target)) {
			document.querySelector("body").classList.remove("no-scroll");
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handlerClickOutside);

		return () => {
			document.addEventListener("mousedown", handlerClickOutside);
		};
	}, []);

	const handlerClick = () => {
		document.querySelector("body").classList.add("no-scroll");
	};

	const handlerCheckIn = date => {
		if (checkOutDate) {
			if (date < checkOutDate) {
				return setCheckInDate(date);
			} else {
				const id = generateUniqueId();
				const message = "El chekin debe ser una fecha anterior al checkout";
				showToast({ id, message });
				return;
			}
		}
		setCheckInDate(date);
	};

	const handlerCheckOut = date => {
		if (checkInDate) {
			if (date > checkInDate) {
				return setCheckOutDate(date);
			} else {
				const id = generateUniqueId();
				const message = "El checkout debe ser una fecha posterior al checkin";
				showToast({ id, message });
				return;
			}
		}
		setCheckOutDate(date);
	};

	const handlerOpenModal = () => {
		if (checkInDate && checkOutDate && capacidad["ADULTOS"]) {
			return setIsOpen(true);
		}
		const id = generateUniqueId();
		const message = "Necesitas completar checkin, checkout y adultos";
		showToast({ id, message });
	};

	const handlerSubmit = (event, errors) => {
		event.preventDefault();
		if (Object.keys(errors).length === 0) {
			setIsLoading(true);
			emailjs
				.sendForm(
					process.env.SERVICE_ID,
					process.env.RESERVA_TEMPLATE_ID,
					event.target,
					process.env.EMAIL_JS_PUBLIC_KEY
				)
				.then(
					result => {
						setIsOpen(false);
						setCheckInDate(null);
						setCheckOutDate(null);
						setCapacidad({});
						const id = generateUniqueId();
						const message = "Su reserva fue completada. Revise su correo";
						showToast({ id, message });
					},
					error => {
						console.log(error.text); // Muestra el error en la consola si ocurre
					}
				)
				.finally(() => {
					setIsLoading(false);
					event.target.reset();
				});
		}
	};

	return (
		<nav className="fade-in">
			<div id="ul-navbar">
				<div className="li" onClick={handlerClick} ref={liCheckIn}>
					<DataPicker
						dateFormat={"dd/MM/yyyy"}
						locale="es"
						selected={checkInDate}
						onChange={date => handlerCheckIn(date, "navbar")}
						className="custom-input"
						calendarClassName="custom-calendar"
						placeholderText={
							window.innerWidth > 768 ? "CHECK IN" : "CHECK \n IN"
						}
					/>
				</div>
				<div className="li">/</div>
				<div className="li" onClick={handlerClick} ref={liCheckOut}>
					<DataPicker
						dateFormat={"dd/MM/yyyy"}
						locale="es"
						selected={checkOutDate}
						onChange={date => handlerCheckOut(date, "navbar")}
						className="custom-input"
						calendarClassName="custom-calendar"
						placeholderText={
							window.innerWidth > 768 ? "CHECK OUT" : `CHECK \n OUT`
						}
					/>
				</div>
				<div className="li">/</div>
				<div className="li">
					<SelectNav
						label="ADULTOS"
						capacidad={capacidad}
						setCapacidad={setCapacidad}
						showToast={showToast}
					/>
				</div>
				<div className="li">/</div>
				<div className="li">
					<SelectNav
						label="NIÑOS"
						capacidad={capacidad}
						setCapacidad={setCapacidad}
						showToast={showToast}
					/>
				</div>
				<button
					className="btn-modal"
					onClick={handlerOpenModal}
					aria-label="Reservar"
					title="Reservar"
				>
					<RxArrowRight />
				</button>
			</div>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen} className="modal-form">
				<FormProvider
					handlerSubmit={handlerSubmit}
					labelBtnSend="SOLICITAR RESERVA"
					spinner={isLoading}
				>
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
					<Input name="Telefono" type="tel" required={true} />
					<Input name="Email" type="email" required={true} />
					<div className="wraper-input-date">
						<input
							type="date"
							name="checkin"
							readOnly={true}
							value={formatedDate(checkInDate)}
						/>
						<label className="label-date">Check in</label>
					</div>
					<div className="wraper-input-date">
						<input
							type="date"
							name="checkout"
							readOnly={true}
							value={formatedDate(checkOutDate)}
						/>
						<label className="label-date">Check out</label>
					</div>
					<div className="wraper-select-form">
						<input
							type="text"
							readOnly={true}
							value={capacidad["ADULTOS"]}
							name="Adultos"
						/>
						<label className="label-select-form">Adultos</label>
					</div>
					<div className="wraper-select-form">
						<input
							type="text"
							readOnly={true}
							value={capacidad["NIÑOS"] ? capacidad["NIÑOS"] : 0}
							name="Niños"
						/>
						<label className="label-select-form">Niños</label>
					</div>
				</FormProvider>
			</Modal>
		</nav>
	);
}
