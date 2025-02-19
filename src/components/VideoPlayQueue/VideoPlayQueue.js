import { useRef, useState, useEffect } from "react";
import "./VideoPlayQueue.css";

export default function VideoPlayQueue({ videos }) {
	const videoRef = useRef();
	const [index, setIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 900);

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [isMobile]);

	useEffect(() => {
		const handleVideoEnd = () => {
			setIndex(prevIndex => (prevIndex + 1) % videos.length);
		};

		if (videoRef.current) {
			videoRef.current.addEventListener("ended", handleVideoEnd);
		}

		return () => {
			if (videoRef.current) {
				videoRef.current.removeEventListener("ended", handleVideoEnd);
			}
		};
	}, [index]);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.src = videos[index][2];
			videoRef.current.play();
		}
	}, [index, videos]);

	return (
		<>
			{isMobile && (
				<div className="videoPlayQueue-container">
					<video
						className="video"
						ref={videoRef}
						autoPlay
						muted
						playsInline
						preload="auto"
					>
						<source src={videos[index][2]} type="video/mp4" />
					</video>
				</div>
			)}
		</>
	);
}
