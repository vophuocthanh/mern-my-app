import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Box from '@mui/material/Box';
function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    const selectMode = event.target.value;
    setMode(selectMode);
  };
  return (
    <FormControl sx={{ minWidth: '120px' }} size='small'>
      <InputLabel
        sx={{ color: 'white', '&.Mui-focused': { color: 'white' } }}
        id='label-select-dark-light-mode'
      >
        Mode
      </InputLabel>
      <Select
        labelId='label-select-dark-light-mode'
        id='select-dark-light-mode'
        value={mode}
        label='Mode'
        onChange={handleChange}
        sx={{
          color: 'white',
          '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '.MuiSvgIcon-root': { color: 'white' },
        }}
      >
        <MenuItem value='light'>
          <div
            className=''
            style={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <LightModeIcon fontSize='small'></LightModeIcon> Light
          </div>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon fontSize='small'></DarkModeOutlinedIcon> Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small'></SettingsBrightnessIcon>
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
export default ModeSelect;
