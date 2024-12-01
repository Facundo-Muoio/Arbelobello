import "./App.css";
import Carrousel from "./components/Carrousel/Carrousel.js";
import Experiencia from "./components/Experiencia/Experiencia.js";
import Header from "./components/Header/Header.js";
import Introduccion from "./components/Introduccion/Introduccion.js";
import Experiencia from "./components/Experiencia/Experiencia.js";
import Comodidades from "./components/Comodidades/Comodidades.js";
import Ubicacion from "./components/Ubicacion/Ubicacion.js";
import Opinions from "./components/Opinions/Opinions.js";
import Tarifas from "./components/Tarifas/Tarifas.js";
import Footer from "./components/Footer/Footer.js";
import { useState, useEffect } from "react";

export default function App() {
	// const [isLoaded, setIsLoaded] = useState(false);

	// useEffect(() => {
	// 	const timerLoadAnimationHeader = setTimeout(() => {
	// 		setIsLoaded(true);
	// 	}, 5000);

	// 	return () => {
	// 		clearTimeout(timerLoadAnimationHeader);
	// 	};
	// }, []);

	return (
		<>
			<Header />
			<main>
				<Introduccion />
				<Carrousel />
				<Experiencia />
				<Comodidades />
				<Ubicacion />
				<Opinions />
				<Tarifas />
			</main>
			<Footer />
		</>
	);
}
