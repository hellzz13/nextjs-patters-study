"use client";

import useSWR from "swr";
import Loading from "../Loading";
import Image from "next/image";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const api = "https://rickandmortyapi.com/api/character";

export default function List() {
  const { data, error, isLoading } = useSWR(api, fetcher);

  if (error) return "An error has occurred.";
  if (isLoading) return <Loading />;

  console.log(data);
  return (
    <div className="flex flex-wrap gap-2">
      {data.results.map((item: any) => (
        <div
          key={item.id}
          className="w-32 flex flex-col justify-center items-center text-center cursor-pointer"
        >
          <Image
            className="rounded-full"
            src={item.image}
            alt={item.name}
            width={100}
            height={100}
            // loading="lazy"
            priority
            placeholder="empty"
          />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
