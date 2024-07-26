import Link from 'next/link';
import Image from 'next/image';

const getPokemonList = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon');
  }

  return response.json();
};

const getPokemonById = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon');
  }

  return response.json();
};

const Home = async () => {
  const pokemonList = await getPokemonList();
  const pokemon = await getPokemonById('1');

  return (
    <main className="flex h-screen w-screen justify-center p-12">
      <div className="relative h-[666px] w-96 rounded-2xl bg-pkmn-red">
        <div className="bg-pkmn-red-dark static h-32 w-48 rounded-br-[60px] rounded-tl-3xl" />
        <div className="bg-pkmn-red-dark absolute top-0 h-24 w-full rounded-tl-3xl p-5">
          <div className="flex gap-2">
            <div className="mt-5 h-16 w-16 rounded-full bg-white p-1">
              <div className="h-full w-full rounded-full bg-blue-300 shadow-[0_0_10px_4px_rgb(114,114,114)_inset]"></div>
            </div>
            <div className="h-4 w-4 rounded-full bg-red-900 shadow-[-2px_-2px_2px_0_rgb(0,0,0)_inset]" />
            <div className="h-4 w-4 rounded-full bg-yellow-200 shadow-[-2px_-2px_2px_0_rgb(0,0,0)_inset]" />
            <div className="h-4 w-4 rounded-full bg-green-500 shadow-[-2px_-2px_2px_0_rgb(0,0,0)_inset]" />
          </div>
        </div>
        <div className="absolute -right-0 top-16 h-[602px] w-52 rounded-tl-[60px] bg-pkmn-red" />
        <div className="bg-pkmn-red-dark absolute -right-0 top-0 h-full w-12 pb-20 pt-28">
          <div className="h-full w-full border-y-2 border-gray-800 py-12" />
        </div>
        {/* screen */}
        <div className="absolute left-6 top-[150px] h-64 w-72 rounded-lg bg-white p-6">
          <div className="group h-full w-full rounded-lg bg-gray-900">
            {pokemon?.sprites?.front_default && (
              <Image
                className="group-hover:hidden"
                alt=""
                height="250"
                width="250"
                src={pokemon?.sprites?.front_default}
              />
            )}
            {pokemon?.sprites?.back_default && (
              <Image
                className="hidden group-hover:block"
                alt=""
                height="250"
                width="250"
                src={pokemon?.sprites?.back_default}
              />
            )}
          </div>
        </div>
        {/* controls */}
        <div className="absolute bottom-0 left-6 flex h-64 w-72 items-end justify-center">
          <div className="bg-screen-green mb-6 flex h-16 w-1/2 flex-col overflow-scroll">
            {pokemonList?.results?.map((pokemon: any, index: number) => (
              <Link
                href={`/pokemon/${pokemon?.name}`}
                key={pokemon?.name}
                className="w-50 text-l hover:bg-sky-500"
              >
                {index + 1}. {pokemon?.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
