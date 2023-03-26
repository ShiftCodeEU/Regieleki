import { type tPokemon } from "../types/Pokemons";
import Pokemons from "../pokemons";

export const getAllPokemons = () => {
  return Pokemons as tPokemon[];
};

export const getPokemonSpeciesByID = (id: string | number) => {
  const response: tPokemon[] = [];
  Pokemons.map((current) => {
    if (current.species_id == id) {
      response.push(current);
    }
  });
  if (response.length > 0) {
    return response;
  } else {
  }
};
