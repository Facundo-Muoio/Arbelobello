import "./Carrousel.css";
import Slider from "../Slider/Slider";
import Slide from "../Slide/Slide";
import Control from "../Control/Control";
import { useFetch } from "../../hooks/hooks";
import {
	HiOutlineArrowSmallLeft,
	HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import { useState, useRef, useEffect } from "react";
import { createObserver } from "../../helpers/helpers.js";

export default function Carrousel() {
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/CAROUSEL?key=${process.env.API_KEY}`;
	const urlText = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/TEXTOS?key=${process.env.API_KEY}`;

	const { data } = useFetch(url);
	const { data: dataText } = useFetch(urlText);
	const nextBtnRef = useRef(null);
	const prevBtnRef = useRef(null);
	const carrouselRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	let images;
	let texts;

	const handlerPrevBtn = ref => {
		const sliderWidth = ref.current.parentElement.parentElement.offsetWidth;
		const controlContainer = ref.current.parentElement;
		if (currentIndex >= 1) {
			setCurrentIndex(prev => prev - 1);
			controlContainer.style.transform = `translateX(${
				sliderWidth * (currentIndex - 1)
			}px)`;
		}
	};

	const handlerNextBtn = ref => {
		const sliderWidth = ref.current.parentElement.parentElement.offsetWidth;
		const controlContainer = ref.current.parentElement;
		if (currentIndex < data.values.slice(2).length - 1) {
			console.log("click");
			setCurrentIndex(prev => {
				controlContainer.style.transform = `translateX(${
					sliderWidth * (currentIndex + 1)
				}px)`;
				return prev + 1;
			});
		}
	};

	console.log(carrouselRef.current);

	useEffect(() => {
		const carrouselObserver = createObserver(setIsVisible, { threshold: 0.9 });

		if (carrouselRef.current) {
			console.log(carrouselRef.current);
			carrouselObserver.observe(carrouselRef.current);
		}

		return () => {
			if (carrouselRef.current)
				carrouselObserver.unobserve(carrouselRef.current);
		};
	}, []);

	// if (data && dataText) {
	// 	images = data.values.slice(2);
	// 	texts = dataText.values.filter(text => text[0] === "carousel");
	// }

	return (
		<div className="container-carrousel" ref={carrouselRef}>
			{isVisible &&
				(data && dataText
					? ((images = data.values.slice(2)),
					  (texts = dataText.values.filter(text => text[0] === "carousel")),
					  (
							<>
								<div className="wraper-text-carrousel">
									<p>{`${texts[0][2]}`}</p>
								</div>
								<Slider
									style={{ transform: `translateX(${-100 * currentIndex}%)` }}
								>
									{images.map(([id, , src, alt]) => (
										<Slide key={id}>
											<img
												src={src}
												alt={alt}
												// style={{ transform: ` translateX(-${100 * id}%)` }}
											/>
										</Slide>
									))}
									<Control>
										<button
											ref={nextBtnRef}
											onClick={() => handlerPrevBtn(prevBtnRef)}
										>
											<HiOutlineArrowSmallLeft />
										</button>
										<div className="page-counter">
											{currentIndex + 1 < 10
												? "0" + (currentIndex + 1)
												: currentIndex + 1}{" "}
											/{" "}
											{images.length < 10 ? "0" + images.length : images.length}
										</div>
										<button
											ref={prevBtnRef}
											onClick={() => handlerNextBtn(nextBtnRef)}
										>
											<HiOutlineArrowSmallRight />
										</button>
									</Control>
								</Slider>
							</>
					  ))
					: "")}
		</div>
	);
}
