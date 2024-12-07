import { useRef, useState } from "react";
import "./Opinions.css";
import { useAnimation, useFetch } from "../../hooks/hooks";
import { createObserver } from "../../helpers/helpers";
import Star from "../Star/Star";
import ButtonCards from "../ButtonCards/ButtonCards";

export default function Opinions() {
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/OPINIONES?key=${process.env.API_KEY}`;
	const { data } = useFetch(url);
	const [isVisible, setIsVisible] = useState();
	const opinionsRef = useRef();
	const sliderRef = useRef(null);
	const opinionsObserver = createObserver(setIsVisible, { threshold: 0.9 });
	useAnimation(opinionsObserver, opinionsRef);
	let opinions;

	if (data) {
		opinions = data.values.slice(2);
	}

	return (
		<div className="container-opinions" ref={opinionsRef}>
			{data && isVisible && (
				<>
					<div className="container-opinions-text">
						<h1>Ya disfrutaron</h1>
						<p>Alberobello Casa Serrana</p>
					</div>
					<div class="wraper-slider-cards">
						<div className="slider-cards" ref={sliderRef}>
							{opinions.map(([fullName, userImage, rating, opinion]) => (
								<div className="card-opinion" key={crypto.randomUUID()}>
									<div>
										<strong>“”</strong>
										<img src={userImage} alt="" />
										<h4>{fullName}</h4>
									</div>
									<p>{opinion}</p>
									<Star rating={rating} />
								</div>
							))}
						</div>
					</div>
					<ButtonCards sliderRef={sliderRef} opinions={data.values.slice(2)} />
				</>
			)}
		</div>
	);
}
