import "./Footer.css";
import Logo from "../../images/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import * as React from "react";
import { createObserver } from "../../helpers/helpers";
import { useAnimation } from "../../hooks/hooks";
import { useState, useRef } from "react";
import EmailForm from "../EmailForm/EmailForm";
import ToastProvider from "../Toast/ToastProvider";

export default function Footer() {
	const [isVisible, setIsVisible] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const footerRef = useRef();
	const footerObserver = createObserver(setIsVisible, { threshold: 0.9 });
	const handlerOpen = () => {
		setIsOpen(true);
	};

	useAnimation(footerObserver, footerRef);

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
							<button>MÁS INFO</button>
						</div>
					</>
				)}
			</footer>
		</ToastProvider>
	);
}
