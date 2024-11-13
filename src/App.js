import "./App.css";
import Header from "./components/Header/Header.js";
import Introduccion from "./components/Introduccion/Introduccion.js";

export default function App() {
	return (
		<>
			<Header />
			<main>
				<Introduccion></Introduccion>
				{/* <section id="comodidades"></section>
				<section id="ubicación"></section>
				<section id="testimonios"></section>
				<section id="tarifas"></section> */}
			</main>
			<footer></footer>
		</>
	);
}
