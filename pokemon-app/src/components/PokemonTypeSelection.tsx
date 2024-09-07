import { FC } from 'react';
import { Select, MenuItem } from '@mui/material';

interface PokemonTypeSelectionProps {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
}

const PokemonTypeSelection: FC<PokemonTypeSelectionProps> = ({ selectedType, selectType }) => (
  <Select value={selectedType} onChange={(e) => selectType(e.target.value)}>
    <MenuItem value="grass">Grass</MenuItem>
    <MenuItem value="fire">Fire</MenuItem>
    <MenuItem value="water">Water</MenuItem>
  </Select>
);

export default PokemonTypeSelection;
