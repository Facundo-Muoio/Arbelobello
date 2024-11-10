import "./Navbar.css";
import { RxArrowRight } from "react-icons/rx";

export default function Navbar() {
	return (
		<nav className="fade-in">
			<ul id="ul-navbar">
				<li>CHECK IN</li>
				<li>/</li>
				<li>CHECK OUT</li>
				<li>/</li>
				<li>ADULTOS</li>
				<li>/</li>
				<li>NIÑOS</li>
				<button>
					<RxArrowRight />
				</button>
			</ul>
		</nav>
	);
}
