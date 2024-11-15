import "./App.css";
import Carrousel from "./components/Carrousel/Carrousel.js";
import Header from "./components/Header/Header.js";
import Introduccion from "./components/Introduccion/Introduccion.js";
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
						<Introduccion></Introduccion>
						<Carrousel></Carrousel>
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
