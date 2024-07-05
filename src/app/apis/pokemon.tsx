import { Pokemon } from "../types/Pokemon";

export const fetchPokemonData = async (id: string): Promise<Pokemon> => {
  const apiUrl = "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/pokemon/${id}`);
  return response.json();
};
