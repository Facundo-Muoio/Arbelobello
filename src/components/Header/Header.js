import LogoSierraAlta from "../../images/sierra_alta.png";
import LogoSierraBaja from "../../images/sierra_baja.png";
import PathSierra from "../../images/pathSierras.png";
import Navbar from "../Navbar/Navbar.js";
import "./Header.css";

export default function Header() {
	return (
		<header>
			<div className="videos">
				<img src="" alt="" />
				<img src="" alt="" />
			</div>
			<div id="container-logo_sierraAlta">
				<img
					className="logo sierra_alta"
					src={LogoSierraAlta}
					alt="logo Arbelo Bello"
				/>
				<div className="mask mask-logo_sierraAlta"></div>
			</div>
			<div id="container-logo_sierraBaja">
				<img
					className="logo sierra_baja"
					src={LogoSierraBaja}
					alt="logo Arbelo Bello"
				/>
				<div className="mask mask-logo_sierraBaja"></div>
			</div>
			<h1 className="tracking-in-expand">AlberoBello</h1>
			<h2 className="tracking-in-contract ">CASA SERRANA</h2>
			<img className="path" src={PathSierra} alt="" />
			<Navbar />
		</header>
	);
}
