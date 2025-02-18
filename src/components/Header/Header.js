import LogoSierraAlta from "../../images/sierra_alta.png";
import LogoSierraBaja from "../../images/sierra_baja.png";
import PathSierra from "../../images/pathSierras.png";
import Navbar from "../Navbar/Navbar.js";
import ToastProvider from "../Toast/ToastProvider.js";
import { useRef, useState, useContext } from "react";
import { useAnimation, useFetch } from "../../hooks/hooks.js";
import "dotenv/config";
import "./Header.css";
import { createObserver } from "../../helpers/helpers.js";
import { FloatingWpContext } from "../../Contexts/Context.js";
import SplitingVideo from "../SplitingVideo/SplitingVideo.js";
import VideoPlayQueue from "../VideoPlayQueue/VideoPlayQueue.js";

export default function Header() {
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SPREADSHEET_ID}/values/HEADER?key=${process.env.API_KEY}`;
	const [isVisible, setIsVisible] = useState();
	const headerRef = useRef();
	const { setFloatingWhatsappVisibility } = useContext(FloatingWpContext);
	const headerObserver = createObserver(
		setIsVisible,
		{ threshold: 0.9 },
		setFloatingWhatsappVisibility,
		{ setOnFalse: true }
	);
	let videos;

	useAnimation(headerObserver, headerRef);

	const { data, error, isLoading } = useFetch(url);

	if (error) {
		console.error(error);
		return error;
	}

	if (isLoading) {
		return <div className="background-loading "></div>;
	}

	if (data) {
		videos = data.values.slice(2);
	}

	if (data)
		return (
			<>
				<div className="background">
					{/* <FadeImage images={data.values.slice(2, 3)} />
					<FadeImage images={data.values.slice(3)} /> */}
					<SplitingVideo sourceVideo={videos[0][2]} side="left" />
					<SplitingVideo sourceVideo={videos[1][2]} side="right" />
					{videos && <VideoPlayQueue videos={videos} />}
				</div>
				<header ref={headerRef}>
					<div id="container-logo_sierraAlta">
						<img
							className="logo sierra_alta"
							src={LogoSierraAlta}
							alt="logo Arbelo Bello"
							loading="lazy"
							width={"370"}
							height={"17"}
						/>
						<div className="mask mask-logo_sierraAlta"></div>
					</div>
					<div id="container-logo_sierraBaja">
						<img
							className="logo sierra_baja"
							src={LogoSierraBaja}
							alt="logo Arbelo Bello"
							loading="lazy"
							width={"370"}
							height={"17"}
						/>
						<div className="mask mask-logo_sierraBaja"></div>
					</div>
					<h1 className="tracking-in-expand">Alberobello</h1>
					<h2 className="tracking-in-contract ">CASA SERRANA</h2>
					<img className="path" src={PathSierra} alt="" />
					<ToastProvider>
						<Navbar />
					</ToastProvider>
				</header>
			</>
		);
}
