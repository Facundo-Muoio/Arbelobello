import "./Introduccion.css";
import { useState, useRef, useEffect } from "react";
import GalleryImage from "../GalleryImage/GalleryImage.js";
import { createObserver } from "../../helpers/helpers.js";

export default function Introduccion() {
	const sectionRef = useRef(null);
	const [textVisibility, setTextVisibility] = useState(false);
	const [galleryVisibility, setGalleryVisibility] = useState(false);

	useEffect(() => {
		const observerText = createObserver(setTextVisibility, { threshold: 0.3 });
		const observerGallery = createObserver(setGalleryVisibility, {
			threshold: 0.85,
		});

		if (sectionRef.current) {
			observerText.observe(sectionRef.current);
			observerGallery.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observerText.unobserve(sectionRef.current);
				observerGallery.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<section id="introducción" ref={sectionRef}>
			{textVisibility && (
				<div className="contenedor-intro">
					<h3>
						Al pie de las Sierras de <b>Córdoba, en Calamuchita,</b>
						<br />
						donde la naturaleza susurra secretos y los grateau
						<br />
						llenan de colores el paisaje, encontrarás nuestro <br />
						rincón de paz:
					</h3>
					<h1>Alberobello</h1>
					<h2>CASA SERRANA</h2>
				</div>
			)}
			{galleryVisibility && <GalleryImage />}
		</section>
	);
}
