"use client";

import useSWR from "swr";
import Loading from "../Loading";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const api = "https://rickandmortyapi.com/api/character";

export default function List() {
  const { data, error, isLoading } = useSWR(api, fetcher);

  if (error) return "An error has occurred.";
  if (isLoading) return <Loading />;

  console.log(data);
  return (
    <ul id="data">
      {data.results.map((item: any, key: string) => (
        <li key={key}>{item.name}</li>
      ))}
    </ul>
  );
}
