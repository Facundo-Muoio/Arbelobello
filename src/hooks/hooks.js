import useSWR from "swr";
import { createObserver, fetcher } from "../helpers/helpers";
import { useEffect } from "react";

const useFetch = url => {
	const { data, error, isLoading } = useSWR(url, fetcher);

	return {
		data,
		isLoading,
		error,
	};
};

const useAnimation = (
	setFunction,
	optionsObserver,
	elementRef,
	dependencies = null
) => {
	const observer = createObserver(setFunction, optionsObserver);

	console.log(observer, elementRef.current, setFunction);

	useEffect(() => {
		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => observer.unobserve(elementRef.current);
	}, [dependencies]);
};

export { useFetch, useAnimation };
