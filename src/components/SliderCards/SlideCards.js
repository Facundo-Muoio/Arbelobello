import Star from "../Star/Star";

export default function SliderCards({ opinions, currentIndex }) {
	const width = window.innerWidth;
	const translateMultiplicator =
		width >= 768 && width <= 1024
			? 100 / 2 + (300 / width) * 2
			: 100 / 3 + 0.33;
	return (
		<div className="container-slider-cards">
			<div
				className="slider-content"
				style={{
					transform: `translateX(-${currentIndex * translateMultiplicator}%)`,
				}}
			>
				{opinions.map(({ id, userImage, fullName, opinion, rating }, index) => (
					<div className="card-opinion" key={id}>
						<div>
							<strong>“”</strong>
							<img src={userImage} alt="" />
							<h4>{fullName}</h4>
						</div>
						<p>{opinion}</p>
						<Star rating={rating} />
					</div>
				))}
			</div>
		</div>
	);
}
