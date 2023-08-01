import {} from 'react';
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

function ModeToggle() {
  //  lưu localStorage vào trình duyệt (dark/light)
  const { mode, setMode } = useColorScheme();
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
