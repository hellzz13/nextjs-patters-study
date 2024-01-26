import Loading from "@/src/components/Loading";
import useSWR from "swr";

export function useRequest<T>(
  apiKey: string,
  fetcher: (apiKey: string) => Promise<T>
) {
  const { data, error, isLoading, ...props } = useSWR(apiKey, fetcher);

  return { data, error, isLoading, ...props };
}
