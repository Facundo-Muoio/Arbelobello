import { useEffect, useState } from "react";
import "./GalleryImage.css";
import { useFetch } from "../../hooks/hooks";
import Modal from "../Modal/Modal";
import { RxArrowRight } from "react-icons/rx";

export default function GalleryImage() {
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/GALERIA?key=${process.env.API_KEY}`;

	const { data } = useFetch(url);
	const [mainImage, setMainImage] = useState();
	const [animate, setAnimate] = useState(false);
	const [timeoutId, setTimeoutId] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	let images;

	const handleImageClick = (url, alt) => {
		setAnimate(false);

		const newTimeoutId = setTimeout(() => {
			setMainImage({ url, alt });
			setAnimate(true);
		}, 10);

		setTimeoutId(newTimeoutId);
	};

	const handleModalOpen = () => {
		setIsOpen(true);
	};

	useEffect(() => {
		return () => {
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [timeoutId]);

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
								!mainImage && index == "1"
									? "active"
									: url === mainImage
									? "active"
									: ""
							}`}
							onClick={() => handleImageClick(url, alt)}
						/>
					))}
					<img
						src={mainImage ? mainImage.url : images[0][2]}
						alt={mainImage ? mainImage.alt : images[0][3]}
						decoding="async"
						className={`main-img  ${animate ? "fade" : ""}`}
					/>
					<button className="btn-open-modal" onClick={handleModalOpen}>
						AMPLIAR
						<RxArrowRight className="arrow-icon" />
					</button>
				</div>
				<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
					<img
						src={mainImage ? mainImage.url : images[0][2]}
						alt={mainImage ? mainImage.alt : images[0][3]}
					/>
				</Modal>
			</div>
		);
	}
}
