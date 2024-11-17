import "./App.css";
import Carrousel from "./components/Carrousel/Carrousel.js";
import Experiencia from "./components/Experiencia/Experiencia.js";
import Header from "./components/Header/Header.js";
import Introduccion from "./components/Introduccion/Introduccion.js";
import Experiencia from "./components/Experiencia/Experiencia.js";
import Comodidades from "./components/Comodidades/Comodidades.js";
import { useState, useEffect } from "react";

export default function App() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const timerLoadAnimationHeader = setTimeout(() => {
			setIsLoaded(true);
		}, 5000);

		return () => clearTimeout(timerLoadAnimationHeader);
	}, []);

	return (
		<>
			<Header />
			{isLoaded ? (
				<>
					<main>
						<Introduccion />
						<Carrousel />
						<Experiencia />
						<Comodidades />
						{/* <section id="comodidades"></section>
				<section id="ubicación"></section>
				<section id="testimonios"></section>
				<section id="tarifas"></section> */}
					</main>
					<footer></footer>
				</>
			) : null}
		</>
	);
}
