import { useContext, useEffect, useRef, useState } from "react";
import "./Slider.css";
import { createObserver } from "../../helpers/helpers";
import {
	HiOutlineArrowSmallLeft,
	HiOutlineArrowSmallRight,
} from "react-icons/hi2";

export default function Slider({ data }) {
	const images = data.slice(2);
	const [isVisible, setIsVisible] = useState(false);
	const [counter, setCounter] = useState(1);
	const sliderRef = useRef(null);

	const handlerNextClick = () => {
		if (counter < images.length) {
			slider = sliderRef.current;
			slider.append(slider.firstChild);
			setCounter(counter + 1);
		}
	};

	const handlerPrevClick = () => {
		if (counter > 1) {
			slider = sliderRef.current;
			slider.prepend(slider.lastChild);
			setCounter(counter - 1);
		}
	};

	useEffect(() => {
		const sliderObserver = createObserver(setIsVisible, { threshold: 0.5 });

		if (sliderRef.current) {
			sliderObserver.observe(sliderRef.current);
		}

		return () => {
			if (sliderRef.current) {
				sliderObserver.current.unobserve(sliderRef.current);
			}
		};
	}, []);

	return (
		<div className="carousel-container">
			<div className="slider" ref={sliderRef}>
				{isVisible &&
					images.map(([id, , url, description]) => (
						<img key={id} src={url} alt={description} />
					))}
			</div>
			<div className="container-btn-carousel">
				{counter < 10 ? "0" + counter : counter} /{" "}
				{images.length < 10 ? "0" + images.length : ""}
				<HiOutlineArrowSmallLeft
					className={`arrow-left ${counter === 1 ? "desactive" : ""}`}
					onClick={handlerPrevClick}
				/>
				<HiOutlineArrowSmallRight
					className={`arrow-right ${
						counter === images.length ? "desactive" : ""
					}`}
					onClick={handlerNextClick}
				/>
			</div>
		</div>
	);
}
