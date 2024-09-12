import { FC } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

interface PokemonTypeSelectionProps {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
}

const PokemonTypeSelection: FC<PokemonTypeSelectionProps> = ({ selectedType, selectType }) => (
  <FormControl fullWidth variant="outlined" sx={{ minWidth: 120 }}>
    <InputLabel>Select Pokémon Type</InputLabel>
    <Select
      value={selectedType ?? ''}
      onChange={(e) => selectType(e.target.value as string)}
      label="Select Pokémon Type"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value="grass">Grass</MenuItem>
      <MenuItem value="fire">Fire</MenuItem>
      <MenuItem value="water">Water</MenuItem>
      <MenuItem value="electric">Electric</MenuItem>
      <MenuItem value="flying">Flying</MenuItem>
    </Select>
  </FormControl>
);

export default PokemonTypeSelection;
