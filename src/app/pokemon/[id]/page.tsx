import Image from 'next/image';
import Link from 'next/link';

interface PokemonProps {
  params: {
    id: string;
  };
}

const getPokemonById = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon');
  }

  return response.json();
};

const Pokemon = async ({ params }: PokemonProps) => {
  const pokemon = await getPokemonById(params.id);

  return (
    <div>
      <Link href="/pokemon" className="bg-red hover:bg-skyl-500 w-50 text-xl">
        {pokemon?.name}
      </Link>
      <div className="group">
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
  );
};

export default Pokemon;
