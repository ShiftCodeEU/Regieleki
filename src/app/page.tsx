import { type NextPage } from "next";

import { getAllPokemons } from "@/data/handlers/pokemon";

export const metadata = {
  title: "Regieleki - Pokedex",
  description: "A blazingly fast pokedex build by ShiftCode Developments",
};

const Home: NextPage = () => {
  const pokemons = getAllPokemons();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="mb-4 mt-4 text-2xl lg:text-4xl">
          <strong className="text-lime-200">Regieleki</strong>
          {" - "}
          <span className="text-red-600">Pokedex</span>
        </h1>
        <div className="flex w-full flex-col gap-2 px-2 pb-2">
          {pokemons ? (
            pokemons.map((currentPokemon) => {
              return (
                <div
                  key={currentPokemon.id}
                  className="w-full bg-stone-900 px-2 py-4"
                >
                  <h1>ID: {String(currentPokemon.species_id)}</h1>
                  <h2>Name: {String(currentPokemon.identifier)}</h2>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
