import React, { useRef, useState } from "react";
import { createObserver, parseTextToJSX } from "../../helpers/helpers";
import { useAnimation, useFetch } from "../../hooks/hooks";
import "./Experiencia.css";

export default function Experiencia() {
	const contentRef = useRef(null);
	const [contentIsVisible, setcontentIsVisible] = useState(false);
	const contentObserver = createObserver(setcontentIsVisible, {
		threshold: 0.3,
	});
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/EXPERIENCIA?key=${process.env.API_KEY}`;
	const urlText = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/TEXTOS?key=${process.env.API_KEY}`;
	const { data: dataText } = useFetch(urlText);
	const { data } = useFetch(url);
	let texts;

	useAnimation(contentObserver, contentRef);

	if (dataText) {
		texts = dataText.values.filter(text => text[0].trim() === "experiencia");
	}

	return (
		<div className="container-experience section" ref={contentRef}>
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
						{dataText && (
							<div className="text-box">
								<h1>{parseTextToJSX(texts[0][2])}</h1>
								<p>{parseTextToJSX(texts[1][2])}</p>
							</div>
						)}
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
