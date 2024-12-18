import {
	HiOutlineArrowSmallLeft,
	HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import { useState } from "react";
import "./ButtonCards.css";

export default function ButtonCards({ sliderRef, opinions }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const width = window.innerWidth;
	const numberCardsVisibles =
		width < 768 ? 1 : width >= 768 && width <= 1024 ? 2 : 3;
	const pages = opinions.length - numberCardsVisibles + 1;
	const firstIndex = currentIndex === 0;
	const lastIndex = currentIndex === opinions.length - numberCardsVisibles;

	const scrollLeft = () => {
		if (!firstIndex) {
			setCurrentIndex(prevIndex => prevIndex - 1);
			sliderRef.current.scrollBy({
				left: sliderRef.current.firstChild.clientWidth * -1,
				behavior: "smooth",
			});
		}
	};

	const scrollRight = () => {
		if (!lastIndex) {
			setCurrentIndex(prevIndex => prevIndex + 1);
			sliderRef.current.scrollBy({
				left: sliderRef.current.firstChild.clientWidth,
				behavior: "smooth",
			});
		}
	};

	return (
		<button className="btn-opinions">
			{currentIndex < 10 ? 0 + currentIndex + 1 : currentIndex + 1} /{" "}
			{pages < 10 ? 0 + pages : pages}
			<HiOutlineArrowSmallLeft className="arrow-opinion" onClick={scrollLeft} />
			<HiOutlineArrowSmallRight
				className="arrow-opinion"
				onClick={scrollRight}
			/>
		</button>
	);
}
