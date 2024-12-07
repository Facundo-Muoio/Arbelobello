import { useEffect, useId, useRef } from "react";
import "./Modal.css";

export default function Modal({ isOpen, setIsOpen, children, className }) {
	const id = useId();
	const dialogRef = useRef(null);

	useEffect(() => {
		if (isOpen) {
			dialogRef.current.showModal();
		} else {
			dialogRef.current.close();
		}

		const handleClickOutside = event => {
			if (
				dialogRef.current &&
				!dialogRef.current.firstChild.contains(event.target)
			) {
				setIsOpen(false);
			}
		};

		const handleKeyDown = event => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen]);

	return (
		<dialog
			id={id}
			ref={dialogRef}
			className={`modal-dialog ${className && className}`}
		>
			<div className="modal-content">{children}</div>
		</dialog>
	);
}
