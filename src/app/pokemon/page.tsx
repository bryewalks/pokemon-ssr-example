import Link from 'next/link';

const getPokemonList = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon');
  }

  return response.json();
};

const Home = async () => {
  const pokemonList = await getPokemonList();

  return (
    <main className="flex flex-col">
      {pokemonList?.results?.map((pokemon: any) => (
        <Link
          href={`/pokemon/${pokemon?.name}`}
          key={pokemon?.name}
          className="w-50 text-xl hover:bg-sky-500"
        >
          {pokemon?.name}
        </Link>
      ))}
    </main>
  );
};

export default Home;
