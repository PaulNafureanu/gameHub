import { useState, useEffect } from "react";
import ApiService, { CanceledError, ApiError } from "../services/ApiService";

interface FetchedDataResponse<T extends any[]> {
  count: number;
  results: T;
}

const useData = <T extends any[]>(endpoint: string) => {
  const [data, setData] = useState<T>([] as unknown as T);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    ApiService.get<FetchedDataResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err: ApiError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading, setData, setError, setIsLoading };
};

export default useData;
