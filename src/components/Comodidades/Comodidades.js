import "./Comodidades.css";
import Personas from "../../images/personas.png";
import CamaDoble from "../../images/camaDoble.png";
import CamaSimple from "../../images/camaSimple.png";
import Cocina from "../../images/cocina.png";
import Quincho from "../../images/quincho.png";
import Piscina from "../../images/piscina.png";
import Baño from "../../images/toilet.png";
import Wifi from "../../images/wifi.png";
import Tv from "../../images/tv.png";
import Asador from "../../images/asador.png";
import Sombrilla from "../../images/sombrilla.png";
import Juegos from "../../images/juegosMesa.png";
import Amenities from "../../images/amenities.png";
import Ropa from "../../images/ropaBlanca.png";
import Desayuno from "../../images/desayuno.png";
import { useState, useRef } from "react";
import { createObserver } from "../../helpers/helpers";
import { useAnimation } from "../../hooks/hooks";

export default function Comodidades() {
	const comodidadesRef = useRef();
	const [isVisible, setIsVisible] = useState();
	const comodidadesObserver = createObserver(setIsVisible, {
		threshold: 0.9,
	});

	useAnimation(comodidadesObserver, comodidadesRef);

	return (
		<div className="container-comodidades section" ref={comodidadesRef}>
			{isVisible && (
				<>
					<div className="item">
						<img src={Personas} alt="" />
						<p>
							Capacidad máxima <br />
							<strong>6 personas</strong>
						</p>
					</div>
					<div className="item">
						<img src={CamaDoble} alt="" />
						<p>
							<strong>
								2 dormitorios <br />
							</strong>{" "}
							con camas de dos plazas
						</p>
					</div>
					<div className="item">
						<img src={CamaSimple} alt="" />
						<p>
							<strong>
								1 cama <br />
							</strong>
							marinera en el living
						</p>
					</div>

					<div className="item">
						<img src={Cocina} alt="" />
						<p>
							<strong>Cocina equipada,</strong> incluye artículos para asado
						</p>
					</div>
					<div className="item">
						<img src={Quincho} alt="" />
						<p>
							<strong>Quincho</strong> con asador propio, mesa y sillas, un baño
							extra con ducha
						</p>
					</div>

					<div className="item">
						<img src={Piscina} alt="" />
						<p>
							<strong>Piscina exterior</strong> habilitada en temporada de
							verano
						</p>
					</div>

					<div className="item">
						<img src={Baño} alt="" />
						<p>
							<strong>2 baños</strong>
						</p>
					</div>
					<div className="item">
						<img src={Wifi} alt="" />
						<p>
							<strong>Wi-Fi</strong> libre
						</p>
					</div>
					<div className="item">
						<img src={Tv} alt="" />
						<p>
							<strong>Tv Smart</strong> de 40’’
						</p>
					</div>

					<div className="item">
						<img src={Asador} alt="" />
						<p>
							<strong>2 Asadores</strong>, uno en la casa y otro en el quincho
						</p>
					</div>

					<div className="item">
						<img src={Sombrilla} alt="" />
						<p>
							<strong>Sombrilla</strong> a disposición
						</p>
					</div>
					<div className="item">
						<img src={Juegos} alt="" />
						<p>
							<strong>Entretenimiento</strong>: juegos de mesa, metegol, libros,
							juegos para niños
						</p>
					</div>

					<div className="item">
						<img src={Amenities} alt="" />
						<p>
							<strong>Amenities</strong>: shampoo, acondicionador de cabello y
							jabones
						</p>
					</div>
					<div className="item">
						<img src={Ropa} alt="" />
						<p>
							<strong>Ropa blanca</strong>: sábanas, toallones para el interior
							de la cabaña y toallones de pileta
						</p>
					</div>
					<div className="item">
						<img src={Desayuno} alt="" />
						<p>
							<strong>Insumos para desayuno</strong>: saquitos de café, variedad
							de té, sobrecitos de leche en polvo y de azúcar
						</p>
					</div>
				</>
			)}
		</div>
	);
}
