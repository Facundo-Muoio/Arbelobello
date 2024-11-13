import "./Introduccion.css";
import GalleryImage from "../GalleryImage/GalleryImage.js";

export default function Introduccion() {
	return (
		<section id="introducción">
			<div className="contenedor-intro">
				<h3>
					Al pie de las Sierras de <b>Córdoba, en Calamuchita,</b>
					<br />
					donde la naturaleza susurra secretos y los grateau
					<br />
					llenan decolores el paisaje, encontrarás nuestro <br />
					rincón de paz:
				</h3>
				<h1>Alberobello</h1>
				<h2>CASA SERRANA</h2>
			</div>
			<GalleryImage />
		</section>
	);
}
