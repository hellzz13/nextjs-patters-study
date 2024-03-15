import Image from "next/image";
import Loading from "../Loading";
import { Suspense } from "react";

const api = "https://rickandmortyapi.com/api/character";

interface CharactersProps {
  results: [{ id: string; name: string; image: string }];
}

export default async function ServerList() {
  const response = await fetch(api);
  const data: CharactersProps = await response.json();
  const isLoading = !data.results.length;

  if (isLoading) return <Loading />;

  return (
    // validar uso do suspense
    <div className="flex flex-wrap gap-2">
      <Suspense fallback={<Loading />}>
        {data.results.map((item) => (
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
              priority
              placeholder="empty"
            />
            <p>{item.name}</p>
          </div>
        ))}
      </Suspense>
    </div>
  );
}
