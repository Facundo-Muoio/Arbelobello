import { useRef, useState } from "react";
import "./Opinions.css";
import {
	HiOutlineArrowSmallLeft,
	HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import SliderCards from "../SliderCards/SlideCards";
import { useAnimation } from "../../hooks/hooks";
import { createObserver } from "../../helpers/helpers";

export default function Opinions() {
	const opinions = [
		{
			id: 1,
			userImage: "https://i.pravatar.cc/150?img=1",
			fullName: "Juan Pérez",
			opinion:
				"Excelente servicio, muy recomendable. Me encantó la atención y la calidad.",
			rating: 5,
		},
		{
			id: 2,
			userImage: "https://i.pravatar.cc/150?img=2",
			fullName: "María López",
			opinion:
				"Todo estuvo bien, aunque creo que podrían mejorar algunos detalles.",
			rating: 4,
		},
		{
			id: 3,
			userImage: "https://i.pravatar.cc/150?img=3",
			fullName: "Carlos Gómez",
			opinion:
				"La experiencia fue buena, pero esperaba un poco más por el precio.",
			rating: 3,
		},
		{
			id: 4,
			userImage: "https://i.pravatar.cc/150?img=4",
			fullName: "Ana Fernández",
			opinion:
				"No estoy satisfecho con el servicio. Tuve varios inconvenientes.",
			rating: 2,
		},
		{
			id: 5,
			userImage: "https://i.pravatar.cc/150?img=5",
			fullName: "Jorge Ramírez",
			opinion: "Pésima experiencia. No lo recomendaría en absoluto.",
			rating: 1,
		},
		{
			id: 6,
			userImage: "https://i.pravatar.cc/150?img=6",
			fullName: "Lucía Castro",
			opinion: "Un servicio impecable, superaron todas mis expectativas.",
			rating: 5,
		},
		{
			id: 7,
			userImage: "https://i.pravatar.cc/150?img=7",
			fullName: "Ricardo Torres",
			opinion:
				"Me gustó mucho, pero encontré algunas áreas que podrían mejorar.",
			rating: 4,
		},
		{
			id: 8,
			userImage: "https://i.pravatar.cc/150?img=8",
			fullName: "Gabriela Ríos",
			opinion: "Servicio normal, ni muy bueno ni muy malo.",
			rating: 3,
		},
		{
			id: 9,
			userImage: "https://i.pravatar.cc/150?img=9",
			fullName: "Diego Martínez",
			opinion: "La experiencia fue aceptable, pero no la repetiría.",
			rating: 2,
		},
		{
			id: 10,
			userImage: "https://i.pravatar.cc/150?img=10",
			fullName: "Sofía Moreno",
			opinion:
				"Un desastre. No entiendo cómo pueden ofrecer un servicio tan malo.",
			rating: 0,
		},
	];

	const width = window.innerWidth;
	const numberCardsVisibles = width >= 768 && width <= 1024 ? 2 : 3;
	const pages = opinions.length - numberCardsVisibles + 1;
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isVisible, setIsVisible] = useState();
	const opinionsRef = useRef();

	const firstIndex = currentIndex === 0;
	const lastIndex = currentIndex === opinions.length - numberCardsVisibles;

	const opinionsObserver = createObserver(setIsVisible, { threshold: 0.9 });
	useAnimation(opinionsObserver, opinionsRef);

	const handleNext = () => {
		if (!lastIndex) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const handlePrev = () => {
		if (!firstIndex) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	return (
		<div className="container-opinions" ref={opinionsRef}>
			{isVisible && (
				<>
					<div className="container-opinions-text">
						<h1>Ya disfrutaron</h1>
						<p>Alberobello Casa Serrana</p>
					</div>
					<SliderCards opinions={opinions} currentIndex={currentIndex} />
					<button className="btn-opinions">
						{currentIndex < 10 ? 0 + currentIndex + 1 : currentIndex + 1} /{" "}
						{pages < 10 ? 0 + pages : pages}
						<HiOutlineArrowSmallLeft
							className="arrow-opinion"
							onClick={handlePrev}
						/>
						<HiOutlineArrowSmallRight
							className="arrow-opinion"
							onClick={handleNext}
						/>
					</button>
				</>
			)}
		</div>
	);
}
