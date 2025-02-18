import "./FloatingWhatsapp.css";
import { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FloatingWpContext } from "../../Contexts/Context";

export default function FloatingWhatsapp() {
	const { FloatingWpVisibility } = useContext(FloatingWpContext);

	return (
		<div
			className={`floatingWhatsapp ${
				FloatingWpVisibility ? "visible" : "hiden"
			}`}
		>
			<a
				href={`https://wa.me/${process.env.CEL_NUMBER}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaWhatsapp className="icon" />
			</a>
		</div>
	);
}
