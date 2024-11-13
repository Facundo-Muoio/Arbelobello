import useSWR from "swr";
import { fetcher } from "../helpers/helpers";

const useFetch = url => {
	const { data, error, isLoading } = useSWR(url, fetcher);

	return {
		data,
		isLoading,
		error,
	};
};

export { useFetch };
