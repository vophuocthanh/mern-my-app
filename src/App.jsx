import { useState } from 'react';
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Box from '@mui/material/Box';
function ModeToggle() {
  //  lưu localStorage vào trình duyệt (dark/light)
  const { mode, setMode } = useColorScheme();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');
  console.log(' prefersDarkMode: ', prefersDarkMode);
  console.log('prefersLightMode:', prefersLightMode);
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}
export function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    const selectMode = event.target.value;
    console.log(selectMode);
    setMode(selectMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='label-select-dark-light-mode'>Mode</InputLabel>
      <Select
        labelId='label-select-dark-light-mode'
        id='select-dark-light-mode'
        value={mode}
        label='Mode'
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <div
            className=''
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <LightModeIcon fontSize='small'></LightModeIcon> Light
          </div>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <DarkModeOutlinedIcon fontSize='small'></DarkModeOutlinedIcon> Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SettingsBrightnessIcon fontSize='small'></SettingsBrightnessIcon>{' '}
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
    </SvgIcon>
  );
}
function App() {
  return (
    <>
      <ModeToggle></ModeToggle>
      <br />
      <ModeSelect></ModeSelect>
      <hr />
      <div>hello</div>
      <Typography variant='body2' color='text.secondary'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga
        impedit tempora atque inventore, modi odio voluptatibus. Quae
        consequuntur odit id aperiam porro doloribus facere molestiae!
        Doloremque aperiam consequatur excepturi!
      </Typography>
      <Button variant='contained'>Hello World</Button>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThreeDRotation></ThreeDRotation>
      <br />
      <HomeIcon />
      <HomeIcon color='primary' />
      <HomeIcon color='secondary' />
      <HomeIcon color='success' />
      <HomeIcon color='action' />
      <HomeIcon color='disabled' />
      <HomeIcon sx={{ color: pink[500] }} />
      <br />
    </>
  );
}

export default App;
