import useSWR from "swr";
import { fetcher } from "../helpers/helpers";
import { useEffect } from "react";

const useFetch = url => {
	const { data, error, isLoading } = useSWR(url, fetcher, {
		revalidateIfStale: true,
		revalidateOnFocus: true,
		revalidateOnReconnect: true,
	});

	return {
		data,
		isLoading,
		error,
	};
};

const useAnimation = (observer, elementRef) => {
	useEffect(() => {
		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			if (elementRef.current) {
				observer.unobserve(elementRef.current);
			}
		};
	}, [observer, elementRef]);
};

export { useFetch, useAnimation };
