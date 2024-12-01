import { useRef, useState } from "react";
import "./Ubicacion.css";
import { createObserver } from "../../helpers/helpers";
import { useAnimation } from "../../hooks/hooks";

export default function Ubicacion() {
	const [isVisible, setIsVisible] = useState();
	const ubicacionRef = useRef();
	ubicacionObserver = createObserver(setIsVisible, { threshold: 0.9 });

	useAnimation(ubicacionObserver, ubicacionRef);

	return (
		<div className="container-ubicaicion" ref={ubicacionRef}>
			{isVisible && (
				<>
					<div className="container-ubicacion-texts">
						<h1>¿Dónde estamos?</h1>
						<p>
							Alfonsina Storni, Roberto Fontanarrosa &, X5197XAE Santa Mónica,
							Córdoba
						</p>
						<a
							href="https://www.google.com/maps/place/Alberobello+Casa+Serrana/@-32.070774,-64.5714023,17z/data=!4m9!3m8!1s0x95d2bbc9f3eaba11:0xa6d201255950f70b!5m2!4m1!1i2!8m2!3d-32.0700632!4d-64.5719045!16s%2Fg%2F11lcny9mw9?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D"
							target="blank"
						>
							<button className="btn-ubicacion">
								<strong>VER EN MAPS</strong>
							</button>
						</a>
					</div>
					<div className="container-iframe">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1690.4835569216254!2d-64.57113202380373!3d-32.070138205750695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2bbc9f3eaba11%3A0xa6d201255950f70b!2sAlberobello%20Casa%20Serrana!5e0!3m2!1ses-419!2sar!4v1732129955396!5m2!1ses-419!2sar"
							width="600"
							height="450"
							loading="lazy"
						></iframe>
					</div>
				</>
			)}
		</div>
	);
}
