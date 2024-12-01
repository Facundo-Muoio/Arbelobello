import { useContext } from "react";
import { SliderContext } from "../Slider/Slider";

export default function Slide({ children }) {
	const { slider, setSlider, length } = useContext(SliderContext);

	return (
		<div className="slide" key={crypto.randomUUID}>
			{children}
		</div>
	);
}
