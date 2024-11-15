import { useEffect, useId, useRef } from "react";
import "./Modal.css";

export default function Modal({ isOpen, onClose, children }) {
	const id = useId();
	const dialogRef = useRef(null);

	useEffect(() => {
		if (isOpen) {
			dialogRef.current.showModal();
		} else {
			dialogRef.current.close();
		}

		const handleClickOutside = event => {
			if (dialogRef.current.classList[0] === event.target.classList[0]) {
				onClose();
			}
		};

		const handleKeyDown = event => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.addEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

	return (
		<dialog id={id} ref={dialogRef} className="modal-dialog">
			<div className="modal-content">{children}</div>
		</dialog>
	);
}
