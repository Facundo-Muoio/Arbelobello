import { useState, useRef, useEffect } from "react";
import "./SelectNav.css";

export default function SelectNav({
	label,
	capacidad,
	setCapacidad,
	showToast,
}) {
	const [isVisible, setIsVisible] = useState(false);
	const ulRef = useRef();

	const handleClickOutside = event => {
		if (ulRef.current && !ulRef.current.contains(event.target)) {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handlerChange = newValue => {
		const message = "La capacidad máxima es de 6 personas";

		if (label === "ADULTOS") {
			const num = 6 - capacidad["NIÑOS"];
			if (newValue > num) {
				const id = crypto.randomUUID();
				showToast({ id, message });
				setIsVisible(false);
				return;
			}
		}
		if (label === "NIÑOS") {
			const num = 6 - capacidad["ADULTOS"];
			if (newValue > num) {
				const id = crypto.randomUUID();
				showToast({ id, message });
				setIsVisible(false);
				return;
			}
		}
		setIsVisible(false);
		setCapacidad(prevCapacidad => ({ ...prevCapacidad, [label]: newValue }));
	};

	return (
		<div className="container-selectNav">
			<div className="selectNav" onClick={() => setIsVisible(!isVisible)}>
				{capacidad[label] ? capacidad[label] : label}
			</div>
			{isVisible && (
				<ul ref={ulRef}>
					<li className="option" onClick={() => handlerChange(1)}>
						1
					</li>
					<li className="option" onClick={() => handlerChange(2)}>
						2
					</li>
					<li className="option" onClick={() => handlerChange(3)}>
						3
					</li>
					<li className="option" onClick={() => handlerChange(4)}>
						4
					</li>
					<li className="option" onClick={() => handlerChange(5)}>
						5
					</li>
					<li className="option" onClick={() => handlerChange(6)}>
						6
					</li>
					<li>{label}</li>
				</ul>
			)}
		</div>
	);
}
