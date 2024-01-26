"use client";

import Image from "next/image";
import { useRequest } from "@/src/hook/server/useRequest";
import Loading from "../Loading";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const api = "https://rickandmortyapi.com/api/character";

interface CharactersProps {
  results: [{ id: string; name: string; image: string }];
}

export default function List() {
  const { data, error, isLoading } = useRequest<CharactersProps>(api, fetcher);

  if (error) return "Ocorreu um erro!";
  if (isLoading) return <Loading />;

  console.log(data);
  return (
    <div className="flex flex-wrap gap-2">
      {data?.results.map((item) => (
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
