import useSWR from "swr";

const API_BASE_URL = "https://www.boredapi.com";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useGetData = (endpoint) => {
  const url = `${API_BASE_URL}${endpoint}`;
  return useSWR(url, fetcher);
};
