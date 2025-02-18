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
import FloatingWhatsapp from "./components/FloatingWhatsapp/FloatingWhatsapp.js";
import Footer from "./components/Footer/Footer.js";
import FloatingWhatsappProvider from "./Contexts/Context.js";

export default function App() {
	return (
		<>
			<FloatingWhatsappProvider>
				<Header />
				<main>
					<Introduccion />
					<Comodidades />
					<Experiencia />
					<Carrousel />
					<Ubicacion />
					<Opinions />
					<Tarifas />
					<FloatingWhatsapp />
				</main>
				<Footer />
			</FloatingWhatsappProvider>
		</>
	);
}
