import { useEffect, useState, useRef } from "react";
import "./GalleryImage.css";
import { useFetch } from "../../hooks/hooks";
import Modal from "../Modal/Modal";
import { RxArrowRight } from "react-icons/rx";

export default function GalleryImage() {
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/GALERIA?key=${process.env.API_KEY}`;

	const { data } = useFetch(url);
	const [isOpen, setIsOpen] = useState(false);
	const [activeImage, setActiveImage] = useState(1);
	const mainImgRef = useRef(null);
	let images;

	const handleModalOpen = () => {
		setIsOpen(true);
	};

	const handleImageClick = index => {
		setActiveImage(Number(index));
	};

	useEffect(() => {
		let GalleryImageTimeOut;
		if (!isOpen) {
			GalleryImageTimeOut = setTimeout(() => {
				mainImgRef.current ? mainImgRef.current.classList.remove("fade") : "";
				setTimeout(() => {
					setActiveImage(prev => (prev === 4 ? 1 : prev + 1));
					mainImgRef.current ? mainImgRef.current.classList.add("fade") : "";
				}, 10);
			}, 3000);
		}

		return () => clearTimeout(GalleryImageTimeOut);
	}, [isOpen, activeImage]);

	if (data) {
		images = data.values.slice(2);
	}

	if (images) {
		return (
			<div className="contenedor-gallery-image">
				<div className="box-bg-gallery">
					{images.map(([index, , url, alt]) => (
						<img
							key={index}
							src={url}
							alt={alt}
							loading="lazy"
							decoding="async"
							className={`thumbnail ${index} ${
								Number(index) === activeImage ? "active" : ""
							}`}
							onClick={() => handleImageClick(index)}
						/>
					))}
					<img
						src={images[activeImage - 1][2]}
						alt={images[activeImage - 1][3]}
						decoding="async"
						className="main-img"
						ref={mainImgRef}
					/>
					<button className="btn-open-modal" onClick={handleModalOpen}>
						AMPLIAR
						<RxArrowRight className="arrow-icon" />
					</button>
				</div>
				<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
					<img
						src={images[activeImage - 1][2]}
						alt={images[activeImage - 1][3]}
					/>
				</Modal>
			</div>
		);
	}
}
