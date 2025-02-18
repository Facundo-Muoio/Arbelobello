import "./Introduccion.css";
import { useState, useRef, useEffect, useContext } from "react";
import GalleryImage from "../GalleryImage/GalleryImage.js";
import { createObserver, parseTextToJSX } from "../../helpers/helpers.js";
import { useFetch } from "../../hooks/hooks.js";
import { FloatingWpContext } from "../../Contexts/Context.js";

export default function Introduccion() {
	const sectionRef = useRef(null);
	const [textVisibility, setTextVisibility] = useState(false);
	const [galleryVisibility, setGalleryVisibility] = useState(false);
	const { setFloatingWhatsappVisibility } = useContext(FloatingWpContext);
	const urlText = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/TEXTOS?key=${process.env.API_KEY}`;
	const { data: dataText } = useFetch(urlText);
	let texts;

	useEffect(() => {
		const observerText = createObserver(setTextVisibility, { threshold: 0.2 });
		const observerGallery = createObserver(
			setGalleryVisibility,
			{
				threshold: 0.7,
			},
			setFloatingWhatsappVisibility
		);

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

	if (dataText) {
		texts = dataText.values.filter(text => text[0].trim() === "galeria");
	}

	return (
		<section id="introducción" className="section" ref={sectionRef}>
			{textVisibility && dataText ? (
				<div className="contenedor-intro">
					<p>{parseTextToJSX(texts[0][2])}</p>
					<h1>{parseTextToJSX(texts[1][2])}</h1>
					<h2>{parseTextToJSX(texts[2][2])}</h2>
				</div>
			) : (
				""
			)}
			{galleryVisibility && <GalleryImage />}
		</section>
	);
}
