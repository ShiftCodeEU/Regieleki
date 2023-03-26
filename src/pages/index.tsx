import { type NextPage } from "next";
import Head from "next/head";

import { getAllPokemons } from "@/data/handlers/pokemon";

const Home: NextPage = () => {
  const pokemons = getAllPokemons();
  return (
    <>
      <Head>
        <title>Regieleki - Pokedex</title>
        <meta
          name="description"
          content="A blazingly fast pokedex build by ShiftCode Developments"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="mt-4 mb-4 text-2xl lg:text-4xl">
          <strong className="text-lime-200">Regieleki</strong>
          {" - "}
          <span className="text-red-600">Pokedex</span>
        </h1>
        <div className="flex w-full flex-col gap-2 px-2">
          {pokemons ? (
            pokemons.map((currentPokemon) => {
              return (
                <div
                  key={currentPokemon.id}
                  className="w-full bg-stone-900 py-4 px-2"
                >
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
