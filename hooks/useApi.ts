import useSWR from "swr";

const fetcher = async (url: string): Promise<any> => {
  const res = await fetch(url);
  const newResult = await res.json();
  return newResult;
};

export const useApi = (url: string) => useSWR(url, fetcher);
