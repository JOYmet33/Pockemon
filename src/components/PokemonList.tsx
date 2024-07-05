"use client";

import { Pokemon } from "@/app/types/Pokemon";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch("/api/pokemon");
      const data = await response.json();
      setPokemons(data);
      console.log(data);
    };
    fetchPokemons();
  }, []);

  return (
    <div className="justify-center">
      <h2 className="text-base font-bold m-2.5 text-green-600">
        포켓몬 리스트
      </h2>
      <div className="m-2.5 flex flex-wrap gap-4">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="p-2.5 border rounded">
            <Link href={`/pokemon/${pokemon.id}`}>
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.korean_name}
                width={96}
                height={110}
              />
              <p>{pokemon.korean_name}</p>
              <p>도감번호: {pokemon.id}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
