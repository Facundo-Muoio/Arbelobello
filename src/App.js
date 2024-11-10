import "./App.css";
import Header from "./components/Header/Header.js";

export default function App() {
	return (
		<>
			<Header />
			<main>
				<section id="introducción"></section>
				<section id="comodidades"></section>
				<section id="ubicación"></section>
				<section id="testimonios"></section>
				<section id="tarifas"></section>
			</main>
			<footer></footer>
		</>
	);
}
