import "./Carrousel.css";
import Slider from "../Slider/Slider";
import Slide from "../Slide/Slide";
import Control from "../Control/Control";
import { useAnimation, useFetch } from "../../hooks/hooks";
import {
	HiOutlineArrowSmallLeft,
	HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import { useState, useRef } from "react";
import { createObserver, parseTextToJSX } from "../../helpers/helpers.js";

export default function Carrousel() {
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/CARRUSEL?key=${process.env.API_KEY}`;
	const urlText = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/TEXTOS?key=${process.env.API_KEY}`;

	const { data } = useFetch(url);
	const { data: dataText } = useFetch(urlText);
	const nextBtnRef = useRef(null);
	const prevBtnRef = useRef(null);
	const carrouselRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const carrouselObserver = createObserver(setIsVisible, { threshold: 0.3 });
	const windowWidth = window.innerWidth;
	let images;
	let texts;

	const CarrouselHTML = () => {
		if (data && dataText) {
			texts = dataText.values.filter(text => text[0] === "carrusel");
			images = data.values.slice(2);
			return (
				<>
					<div className="wraper-text-carrousel">
						<p>{parseTextToJSX(texts[0][2])}</p>
					</div>
					<Slider style={{ transform: `translateX(${-100 * currentIndex}%)` }}>
						{images.map(([id, , src, alt]) => (
							<Slide key={id}>
								<img src={src} alt={alt} />
							</Slide>
						))}
						{windowWidth < 767 ? null : Controls(images)}
					</Slider>
				</>
			);
		}
	};

	const Controls = images => {
		if (data) {
			return (
				<Control>
					<button ref={prevBtnRef} onClick={() => handlerPrevBtn(prevBtnRef)}>
						<HiOutlineArrowSmallLeft />
					</button>
					<div className="page-counter">
						{currentIndex + 1 < 10
							? "0" + (currentIndex + 1)
							: currentIndex + 1}{" "}
						/ {images.length < 10 ? "0" + images.length : images.length}
					</div>
					<button ref={nextBtnRef} onClick={() => handlerNextBtn(nextBtnRef)}>
						<HiOutlineArrowSmallRight />
					</button>
				</Control>
			);
		}
	};

	const handlerPrevBtn = ref => {
		const sliderWidth = ref.current.parentElement.parentElement.offsetWidth;
		console.log(sliderWidth);
		const controlContainer = ref.current.parentElement;
		if (currentIndex >= 1) {
			setCurrentIndex(prev => prev - 1);
			windowWidth > 767
				? (controlContainer.style.transform = `translateX(${
						sliderWidth * (currentIndex - 1)
				  }px)`)
				: "";
		}
	};

	const handlerNextBtn = ref => {
		const sliderWidth = ref.current.parentElement.parentElement.offsetWidth;
		console.log(sliderWidth);
		const controlContainer = ref.current.parentElement;
		if (currentIndex < data.values.slice(2).length - 1) {
			setCurrentIndex(prev => prev + 1);
			windowWidth > 767
				? (controlContainer.style.transform = `translateX(${
						sliderWidth * (currentIndex + 1)
				  }px)`)
				: "";
		}
	};

	useAnimation(carrouselObserver, carrouselRef);

	return (
		<div className="container-carrousel section" ref={carrouselRef}>
			{isVisible && CarrouselHTML()}
			{data && windowWidth < 767
				? isVisible && Controls(data.values.slice(2))
				: null}
		</div>
	);
}
