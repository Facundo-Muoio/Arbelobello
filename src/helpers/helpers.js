const fetcher = async url => {
	const response = await fetch(url);
	if (!response.ok) {
		const error = new Error(`An error ocurred while fetching the data.`);
		throw error;
	}
	const json = await response.json();
	return json;
};

const createObserver = (
	setFunction,
	{ root = null, marginRoot = "0px 0px 0px 0px", threshold = 0 }
) => {
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					console.log("es visible");
					setFunction(true);
				}
			});
		},
		{ root, marginRoot, threshold }
	);
	return observer;
};

export { fetcher, createObserver };
