import "./Footer.css";
import Logo from "../../images/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import * as React from "react";
import { createObserver, parseTextToJSX } from "../../helpers/helpers";
import { useAnimation, useFetch } from "../../hooks/hooks";
import { useState, useRef, useContext } from "react";
import EmailForm from "../EmailForm/EmailForm";
import ToastProvider from "../Toast/ToastProvider";
import { FloatingWpContext } from "../../Contexts/Context.js";
import Modal from "../Modal/Modal.js";
import Logo from "../../images/logo.png";
import Sierra from "../../images/pathSierras.png";

export default function Footer() {
	const [isVisible, setIsVisible] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [modalInfoVisibility, setModalInfoVisibility] = useState(false);
	const footerRef = useRef();
	const { setFloatingWhatsappVisibility } = useContext(FloatingWpContext);
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/TEXTOS?key=${process.env.API_KEY}`;
	const { data: dataText } = useFetch(url);
	let textModalInfo;

	const footerObserver = createObserver(
		setIsVisible,
		{ threshold: 0.9 },
		setFloatingWhatsappVisibility,
		{ setOnFalse: true }
	);

	const handlerOpen = () => {
		setIsOpen(true);
	};

	const handlerOpenModalInfo = () => {
		setModalInfoVisibility(true);
	};

	useAnimation(footerObserver, footerRef);

	if (dataText) {
		textModalInfo = dataText.values.filter(
			text => text[0] === "términos y condiciones"
		);
	}

	return (
		<ToastProvider className="toast-footer">
			<footer className="container-footer" ref={footerRef}>
				{isVisible && (
					<>
						<div className="wraper-social-medias">
							<a
								href="https://www.instagram.com/alberobellocasaserrana/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{" "}
								<FaInstagram className="icon" />
							</a>
							<a
								href={`https://wa.me/${process.env.CEL_NUMBER}?text=Hola%2C%20me%20gustar%C3%ADa%20tener%20informaci%C3%B3n.`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaWhatsapp className="icon" />
							</a>
							<>
								{" "}
								<EmailForm isOpen={isOpen} setIsOpen={setIsOpen} />
								<GrMailOption className="icon" onClick={() => handlerOpen()} />
							</>
						</div>
						<div className="wraper-logo">
							<img src={Logo} alt="" />
							<h1>Alberobello</h1>
							<p>CASA SERRANA</p>
						</div>
						<div className="wraper-button">
							<button onClick={handlerOpenModalInfo}>MÁS INFO</button>
						</div>
						<Modal
							isOpen={modalInfoVisibility}
							setIsOpen={setModalInfoVisibility}
							className={"modal-info"}
						>
							<div className="wraper-logo-modal_info">
								<img
									src={Logo}
									alt="logo"
									loading="lazy"
									decoding="async"
									className="logo-modal_info"
								/>
								<h2>Arbelobello</h2>
								<h3>CASA SERRANA</h3>
							</div>
							<img src={Sierra} alt="sierra" id="sierras-info" />
							<p style={{ whiteSpace: "pre-line" }}>
								{dataText && parseTextToJSX(textModalInfo[0][2])}
							</p>
							<div className="footer-div"></div>
						</Modal>
					</>
				)}
			</footer>
		</ToastProvider>
	);
}
