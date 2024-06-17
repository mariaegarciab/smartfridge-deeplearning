import useSWR from "swr";
import { fetcher } from "./fetcher";

export const useFridge = () => {
  const { data, error, isLoading } = useSWR(`/fridge`,
    fetcher, {
      refreshInterval: 2000,
    }
  );

  return {
    data,
    error,
    isLoading,
  };
};
