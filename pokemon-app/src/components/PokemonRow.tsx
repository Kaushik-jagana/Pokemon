import { FC } from 'react';
import { Box, Typography, Avatar } from '@mui/material';

interface PokemonRowProps {
  pokemon: {
    id: number;
    name: string;
    sprite: string;
    types: { type: { name: string } }[];
  };
}

const PokemonRow: FC<PokemonRowProps> = ({ pokemon }) => (
  <Box display="flex" alignItems="center" padding={2} borderBottom="1px solid #ddd">
    <Avatar src={pokemon.sprite} alt={pokemon.name} />
    <Typography variant="h6" sx={{ marginLeft: '1rem' }}>{pokemon.name}</Typography>
    <Typography variant="body1" sx={{ marginLeft: 'auto' }}>{pokemon.types.map(t => t.type.name).join(', ')}</Typography>
  </Box>
);

export default PokemonRow;
