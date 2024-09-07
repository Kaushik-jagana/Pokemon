import { useState } from 'react';
import { trpc } from '@/utils/trpc';
import PokedexTable from './PokedexTable';
import PokemonTypeSelection from './PokemonTypeSelection';

const FilterablePokedexTable = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);

  // Always call the useQuery hook, but control when it runs with the `enabled` flag
  const pokemonQuery = trpc.getPokemonByType.useQuery(selectedType!, {
    enabled: !!selectedType, // Only fetch data if selectedType is truthy
  });

  return (
    <>
      <PokemonTypeSelection selectedType={selectedType} selectType={setSelectedType} />
      {pokemonQuery.data && <PokedexTable pokemonArray={pokemonQuery.data} />}
    </>
  );
};

export default FilterablePokedexTable;
