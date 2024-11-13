import { useEffect, useState } from "react";
import "./GalleryImage.css";
import { useFetch } from "../../hooks/hooks";

export default function GalleryImage() {
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/GALERIA?key=${process.env.API_KEY}`;
	const { data } = useFetch(url);
	const [mainImage, setMainImage] = useState();
	const [animate, setAnimate] = useState(false);
	const [timeoutId, setTimeoutId] = useState(null);
	let images;

	const handleImageClick = image => {
		setAnimate(false);

		const newTimeoutId = setTimeout(() => {
			setMainImage(image);
			setAnimate(true);
		}, 10);

		setTimeoutId(newTimeoutId);
	};

	useEffect(() => {
		return () => {
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [timeoutId]);

	if (data) {
		images = data.values.slice(2);
	}

	if (data)
		return (
			<div className="contenedor-gallery-image">
				<div className="box-bg-gallery">
					{images.map(([index, , url, alt]) => (
						<img
							key={index}
							src={url}
							alt={alt}
							className={`thumbnail ${url === mainImage ? "active" : ""}`}
							onClick={() => handleImageClick(url)}
						/>
					))}
					<img
						src={mainImage ? mainImage : images[0][2]}
						alt=""
						className={`main-img ${animate ? "fade" : ""}`}
					/>
				</div>
			</div>
		);
}
