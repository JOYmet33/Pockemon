import { fetchPokemonData } from "@/app/apis/pokemon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemon = await fetchPokemonData(params.id);

  return (
    <div className="container m-2.5 p-2.5 gap-2.5 justify-center">
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.korean_name}
        className="mx-auto"
        width={100}
        height={300}
      />
      <div className="card_header bg-gray-500 gap-1 p-4">
        <h1 className="pokemon_name font-bold text-3xl">
          {pokemon.korean_name}
        </h1>
        <h4 className="pokemon_id">No. {pokemon.id}</h4>
        <ul>
          <li className="pokemon_name_eg">영어이름 : {pokemon.name}</li>
          <li className="pokemon_height">키 : {pokemon.height} m</li>
          <li className="pokemon_weight">무게 : {pokemon.weight} kg</li>
        </ul>
      </div>

      <div className="information_wrap bg-white text-black gap-1 p-4">
        <div className="information(1)"></div>
        <div className="information(2)">
          <h2 className="pokemon_type font-bold">타입 : </h2>
          <div className="text-red-600">
            {pokemon.types.map((type) => (
              <div key={pokemon.id}>{type.type.korean_name}</div>
            ))}
          </div>
          <h2 className="pokemon_character font-bold">특성 : </h2>
          <div className="text-skyblue-600">맹화</div>
        </div>
        <div className="information(3)">
          <p className="pokemon_skills font-bold">기술 : </p>
          <div className="detail-skills flex-wrap">
            {pokemon.moves.map((move) => (
              <div key={move.move.name}>{move.move.korean_name}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-sky-400 text-black mx-2.5 my-2.5 p-1">
        <Link href={"/"}> 뒤로가기 </Link>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
