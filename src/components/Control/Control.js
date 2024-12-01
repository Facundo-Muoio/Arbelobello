export default function Control({ children, style }) {
	return (
		<div className="control-container" style={style}>
			{children}
		</div>
	);
}
