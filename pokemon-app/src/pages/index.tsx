import { useState } from 'react';
import { trpc } from '@/utils/trpc';
import { Box, TextField, Button } from '@mui/material';
import PokedexTable from '@/components/PokedexTable';
import FilterablePokedexTable from '@/components/FilterablePokedexTable';

const Home = () => {
  const [name, setName] = useState('');
  const pokemonQuery = trpc.getPokemon.useQuery(name, { enabled: !!name });
  const [nameArray, setNameArray] = useState<string[]>([]);
  const pokemonArrayQuery = trpc.getPokemonArray.useQuery(nameArray, { enabled: nameArray.length > 0 });

  return (
    <Box>
      <form onSubmit={(e) => { e.preventDefault(); pokemonQuery.refetch(); }}>
        <TextField value={name} onChange={(e) => setName(e.target.value)} label="Pokemon Name" />
        <Button type="submit">Search</Button>
      </form>

      {pokemonQuery.data && <PokedexTable pokemonArray={[pokemonQuery.data]} />}

      <form>
        <TextField onChange={(e) => setNameArray(e.target.value.split(','))} label="Pokemon Names (comma separated)" />
        <Button onClick={() => pokemonArrayQuery.refetch()}>Search Multiple</Button>
      </form>

      {pokemonArrayQuery.data && <PokedexTable pokemonArray={pokemonArrayQuery.data} />}

      <FilterablePokedexTable />
    </Box>
  );
};

export default Home;
