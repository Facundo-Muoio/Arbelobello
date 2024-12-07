import React, { createContext } from "react";

export const SliderContext = createContext();

export default function Slider({ children, style }) {
	const contextValue = {
		length: React.Children.count(children),
	};

	return (
		<SliderContext.Provider value={contextValue}>
			<div className="wraper-slider">
				<div className="slider" style={style}>
					{children}
				</div>
			</div>
		</SliderContext.Provider>
	);
}
