import { useEffect, useRef, useState } from "react";
import "./Carrousel.css";
import { createObserver } from "../../helpers/helpers";
import { useFetch } from "../../hooks/hooks.js";
import Slider from "../Slider/Slider.js";

export default function Carrousel() {
	const [isVisible, setIsVisible] = useState(false);
	const textRef = useRef(null);
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/CAROUSEL?key=${process.env.API_KEY}`;
	const { data, error } = useFetch(url);

	useEffect(() => {
		const textObserver = createObserver(setIsVisible, { threshold: 0.4 });

		if (textRef.current) {
			textObserver.observe(textRef.current);
			console.log({ ["text es visible"]: isVisible });
		}

		return () => {
			if (textRef.current) {
				textRef.current.unobserve(textRef.current);
			}
		};
	}, []);

	return (
		<div className="container-section" ref={textRef}>
			{data && isVisible ? (
				<>
					<div className="container-text">
						<h2>
							<b>
								Cada detalle de esta casa serrana ha sido pensado con amor y
								dedicación. <br />
							</b>
							Todo está diseñado para que sientas la <b>comodidad y calidez</b>{" "}
							de un hogar <br />
							lejos de casa.
							<br />
						</h2>
					</div>
					<Slider data={data.values} />
				</>
			) : null}
		</div>
	);
}
