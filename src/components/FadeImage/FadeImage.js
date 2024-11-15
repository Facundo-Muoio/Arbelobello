import "./FadeImage.css";

export default function FadeImage({ images }) {
	return (
		<div className="container-FadeIgame">
			{images?.map(([id, , url, description]) => (
				<img
					key={id}
					src={url}
					alt={description}
					loading="lazy"
					className="FadeImage"
				/>
			))}
		</div>
	);
}
