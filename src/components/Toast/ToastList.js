import { useContext } from "react";
import "./Toast.css";
import { ToastContext } from "../Toast/ToastProvider";
import { MdOutlineErrorOutline } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function ToastList({ toasts, className }) {
	const { closeToast } = useContext(ToastContext);

	return (
		<div className={`wraper-toasts-list ${className}`}>
			{toasts.map(({ id, message }) => {
				return (
					<div className="toast" key={id}>
						<MdOutlineErrorOutline className="icon-toast" />
						{message}
						<button className="btn-toast-close" onClick={() => closeToast(id)}>
							<IoMdCloseCircleOutline className="icon-toast" />
						</button>
					</div>
				);
			})}
		</div>
	);
}
