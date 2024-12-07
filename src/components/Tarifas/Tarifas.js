import { useRef, useState } from "react";
import "./Tarifas.css";
import { useAnimation } from "../../hooks/hooks";
import { createObserver, parseTextToJSX } from "../../helpers/helpers";
import { useFetch } from "../../hooks/hooks";
import { parse } from "dotenv";

export default function Tarfias() {
	const tarifa = {
		price: "30000",
		expiration: "01/03/2025",
	};

	const [isVisible, setIsVisible] = useState();

	const tarifasRef = useRef();
	const tarifasObserver = createObserver(setIsVisible, { threshold: 0.9 });
	const urlText = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/TEXTOS?key=${process.env.API_KEY}`;
	const { data: dataText } = useFetch(urlText);
	let texts;

	useAnimation(tarifasObserver, tarifasRef);

	if (dataText) {
		texts = dataText.values.filter(text => text[0].trim() === "tarifas");
	}

	return (
		<div className="container-tarifas" ref={tarifasRef}>
			{isVisible && dataText ? (
				<>
					<div className="wraper-tarifa">
						<h2>{parseTextToJSX(texts[0][2])}</h2>
						<p>
							<strong>{parseTextToJSX(texts[1][2])}</strong>
						</p>
					</div>
					<div className="wraper-tarifa">
						<h2>{parseTextToJSX(texts[2][2])}</h2>
						<p>
							<strong>{parseTextToJSX(texts[3][2])}</strong>
						</p>
					</div>
				</>
			) : (
				""
			)}
		</div>
	);
}
