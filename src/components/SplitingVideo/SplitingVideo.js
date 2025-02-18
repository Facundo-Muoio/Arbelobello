import "./SplitingVideo.css";

export default function SplitingVideo({ sourceVideo, side }) {
	return (
		<div className="video-container">
			<video
				autoPlay
				loop
				muted
				playsInline
				preload="auto"
				className={`video ${side}`}
			>
				<source src={sourceVideo} type="video/mp4" />
			</video>
		</div>
	);
}
