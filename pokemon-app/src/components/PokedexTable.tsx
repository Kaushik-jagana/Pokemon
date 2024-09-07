import { FC } from 'react';
import PokemonRow from './PokemonRow';

interface PokedexTableProps {
  pokemonArray: {
    id: number;
    name: string;
    sprite: string;
    types: { type: { name: string } }[];
  }[];
}

const PokedexTable: FC<PokedexTableProps> = ({ pokemonArray }) => (
  <>
    {pokemonArray.map((pokemon) => (
      <PokemonRow key={pokemon.id} pokemon={pokemon} />
    ))}
  </>
);

export default PokedexTable;
