const fetcher = async url => {
	const response = await fetch(url);
	if (!response.ok) {
		const error = new Error(`An error ocurred while fetching the data.`);
		throw error;
	}
	const json = await response.json();
	return json;
};

export { fetcher };
