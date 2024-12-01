import { useRef, useState } from "react";
import "./Tarifas.css";
import { useAnimation } from "../../hooks/hooks";
import { createObserver } from "../../helpers/helpers";

export default function Tarfias() {
	const tarifa = {
		price: "30000",
		expiration: "01/03/2025",
	};

	const [isVisible, setIsVisible] = useState();

	const tarifasRef = useRef();
	const tarifasObserver = createObserver(setIsVisible, { threshold: 0.9 });
	useAnimation(tarifasObserver, tarifasRef);

	return (
		<div className="container-tarifas" ref={tarifasRef}>
			{isVisible && (
				<>
					<div className="wraper-tarifa">
						<h2>
							2 a 3 personas <br /> Valor por noche ${tarifa.price}
						</h2>
						<p>
							<strong>Válida hasta el {tarifa.expiration}</strong>
						</p>
					</div>
					<div className="wraper-tarifa">
						<h2>
							4 a 6 personas <br />
							Valor por noche ${tarifa.price}
						</h2>
						<p>
							<strong>Válida hasta el {tarifa.expiration}</strong>
						</p>
					</div>
				</>
			)}
		</div>
	);
}
