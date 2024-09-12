import { useState } from 'react';
import { trpc } from '@/utils/trpc';
import { Box, TextField, Button, Typography, Container, Grid, Paper } from '@mui/material';
import PokedexTable from '@/components/PokedexTable';
import FilterablePokedexTable from '@/components/FilterablePokedexTable';

const Home = () => {
  const [name, setName] = useState('');
  const pokemonQuery = trpc.getPokemon.useQuery(name, { enabled: !!name });
  const [nameArray, setNameArray] = useState<string[]>([]);
  const pokemonArrayQuery = trpc.getPokemonArray.useQuery(nameArray, { enabled: nameArray.length > 0 });

  return (
    <Container maxWidth="md">
      {/* Header */}
      <Box textAlign="center" my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Pokémon Search
        </Typography>
      </Box>

      {/* Single Pokémon Search */}
      <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Search Pokémon by Name
        </Typography>
        <form onSubmit={(e) => { e.preventDefault(); pokemonQuery.refetch(); }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Enter Pokémon Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
        {pokemonQuery.data && <PokedexTable pokemonArray={[pokemonQuery.data]} />}
      </Paper>

      {/* Multiple Pokémon Search */}
      <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Search Multiple Pokémon by Name
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                fullWidth
                onChange={(e) => setNameArray(e.target.value.split(','))}
                label="Enter Pokémon Names (comma separated)"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="secondary" fullWidth onClick={() => pokemonArrayQuery.refetch()}>
                Search Multiple
              </Button>
            </Grid>
          </Grid>
        </form>
        {pokemonArrayQuery.data && <PokedexTable pokemonArray={pokemonArrayQuery.data} />}
      </Paper>

      {/* Filterable Pokémon Table */}
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Filter Pokémon by Type
        </Typography>
        <FilterablePokedexTable />
      </Paper>
    </Container>
  );
};

export default Home;
