import "./Footer.css";
import Logo from "../../images/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import * as React from "react";
import { createObserver } from "../../helpers/helpers";
import { useAnimation } from "../../hooks/hooks";
import { useState, useRef } from "react";

export default function Footer() {
	const [isVisible, setIsVisible] = useState();
	const footerRef = useRef();
	const footerObserver = createObserver(setIsVisible, { threshold: 0.9 });

	useAnimation(footerObserver, footerRef);

	return (
		<footer className="container-footer" ref={footerRef}>
			{isVisible && (
				<>
					<div className="wraper-social-medias">
						<FaInstagram className="icon" />
						<FaWhatsapp className="icon" />
						<BiLogoGmail className="icon" />
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
	);
}
