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

	const handleImageClick = image => {
		setAnimate(false);

		const newTimeoutId = setTimeout(() => {
			setMainImage(image);
			setAnimate(true);
		}, 10);

		setTimeoutId(newTimeoutId);
	};

	const handleModalOpen = () => {
		setIsOpen(true);
	};

	const handleModalClose = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		return () => {
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [timeoutId]);

	if (data) {
		images = data.values.slice(2);
	}

	if (data) {
		return (
			<div className="contenedor-gallery-image">
				<div className="box-bg-gallery">
					{data.values.slice(2).map(([index, , url, alt]) => (
						<img
							key={index}
							src={url}
							alt={alt}
							loading="eager"
							className={`thumbnail ${index} ${
								!mainImage && index == "1"
									? "active"
									: url === mainImage
									? "active"
									: ""
							}`}
							onClick={() => handleImageClick(url)}
						/>
					))}
					<img
						src={mainImage ? mainImage : images[0][2]}
						loading="eager"
						className={`main-img  ${animate ? "fade" : ""}`}
					/>
					<button className="btn-open-modal" onClick={handleModalOpen}>
						AMPLIAR
						<RxArrowRight className="arrow-icon" />
					</button>
				</div>
				<Modal isOpen={isOpen} onClose={handleModalClose}>
					<img src={mainImage ? mainImage : images[0][2]} alt="" />
				</Modal>
			</div>
		);
	}
}
