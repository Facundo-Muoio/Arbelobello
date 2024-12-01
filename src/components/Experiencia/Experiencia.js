import React, { useRef, useState } from "react";
import { createObserver } from "../../helpers/helpers";
import { useAnimation, useFetch } from "../../hooks/hooks";
import "./Experiencia.css";

export default function Experiencia() {
	const contentRef = useRef(null);
	const [contentIsVisible, setcontentIsVisible] = useState(false);
	const contentObserver = createObserver(setcontentIsVisible, {
		threshold: 0.8,
	});
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/EXPERIENCIA?key=${process.env.API_KEY}`;
	const { data } = useFetch(url);

	useAnimation(contentObserver, contentRef);

	return (
		<div className="container-experience" ref={contentRef}>
			{contentIsVisible && (
				<>
					<div className="experiencie-images-container">
						{data &&
							data.values.slice(2).map(([id, , url, descripcion]) => {
								if (id == 1) {
									return (
										<img
											key={id}
											src={url}
											alt={descripcion}
											className="small-image"
											decoding="async"
										/>
									);
								}
								if (id == 2) {
									return (
										<img
											key={id}
											src={url}
											alt={descripcion}
											className="medium-image"
											decoding="async"
										/>
									);
								}
								if (id == 3) {
									return (
										<img
											key={id}
											src={url}
											alt={descripcion}
											className="large-image"
											decoding="async"
										/>
									);
								}
							})}
					</div>

					<div className="experience-text-container">
						<div className="text-box">
							<h1>Alberobello Casa Serrana es más que un destino turístico</h1>
							<p>
								es una experiencia única, íntima y <br /> personalizada. Un
								lugar donde el tiempo <br />
								se detiene y los recuerdos florecen como <br /> las flores de la
								montaña.
							</p>
						</div>
						<div className="button-box">
							<button className="btn-experience">
								<strong>VER MÁS</strong>
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
