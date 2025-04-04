import "./FloatingWhatsapp.css";
import { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FloatingWpContext } from "../../Contexts/Context";

export default function FloatingWhatsapp() {
	const { FloatingWpVisibility } = useContext(FloatingWpContext);

	return (
		<a
			className={`floatingWhatsapp ${
				FloatingWpVisibility ? "visible" : "hiden"
			}`}
			href={`https://wa.me/${process.env.CEL_NUMBER}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<FaWhatsapp />
		</a>
	);
}
