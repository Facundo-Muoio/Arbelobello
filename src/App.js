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
// import { lineSpinner } from "ldrs";

// import { lazy, Suspense } from "react";
// const Carrousel = lazy(() => import("./components/Carrousel/Carrousel.js"));
// const Experiencia = lazy(() =>
// 	import("./components/Experiencia/Experiencia.js")
// );
// const Introduccion = lazy(() =>
// 	import("./components/Introduccion/Introduccion.js")
// );
// const Comodidades = lazy(() =>
// 	import("./components/Comodidades/Comodidades.js")
// );
// const Ubicacion = lazy(() => import("./components/Ubicacion/Ubicacion.js"));
// const Opinions = lazy(() => import("./components/Opinions/Opinions.js"));
// const Tarifas = lazy(() => import("./components/Tarifas/Tarifas.js"));

export default function App() {
	// const loader = (
	// 	<l-line-spinner
	// 		size="40"
	// 		stroke="3"
	// 		speed="1"
	// 		color="#f1ebdf"
	// 	></l-line-spinner>
	// );

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
