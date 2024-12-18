import { useContext } from "react";
import { SliderContext } from "../Slider/Slider";
import { generateUniqueId } from "../../helpers/helpers";

export default function Slide({ children }) {
	const { slider, setSlider, length } = useContext(SliderContext);

	return (
		<div className="slide" key={generateUniqueId()}>
			{children}
		</div>
	);
}
