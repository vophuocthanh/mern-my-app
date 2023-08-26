import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const MENU_STYLE = {
  color: 'primary.main',
  backgroundColor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main',
  },
  '&:hover': {
    bgcolor: 'primary.50',
  },
};
function BoardBar() {
  return (
    <Box
      sx={{
        // backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        borderTop: '1px solid #00bfa5',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label='ThanhDev'
          clickable //cai nay cung duoc, dung de hover vao
          // onClick={() => {}} // cai nay cung duoc, dung de hover vao
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label='Public/Private Workspace'
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label='Add to Google Driver'
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label='Automation'
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label='Filter'
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant='outlined' startIcon={<PersonAddIcon></PersonAddIcon>}>
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
            },
          }}
        >
          <Tooltip title='thanhdev'>
            <Avatar
              alt='thanhdev'
              src='https://avatars.githubusercontent.com/u/92651849?v=4'
            />
          </Tooltip>
          <Tooltip title='thanhdev'>
            <Avatar
              alt='thanhdev'
              src='https://images.unsplash.com/photo-1682685794304-99d3d07c57d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80'
            />
          </Tooltip>
          <Tooltip title='thanhdev'>
            <Avatar
              alt='thanhdev'
              src='https://images.unsplash.com/photo-1682687218904-de46ed992b58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2143&q=80'
            />
          </Tooltip>
          <Tooltip title='thanhdev'>
            <Avatar
              alt='thanhdev'
              src='https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
            />
          </Tooltip>
          <Tooltip title='thanhdev'>
            <Avatar
              alt='thanhdev'
              src='https://plus.unsplash.com/premium_photo-1667128695621-ca19d844a643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            />
          </Tooltip>
          <Tooltip title='thanhdev'>
            <Avatar
              alt='thanhdev'
              src='https://plus.unsplash.com/premium_photo-1664115207151-88438bc8481f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
            />
          </Tooltip>
          <Tooltip title='thanhdev'>
            <Avatar
              alt='thanhdev'
              src='https://plus.unsplash.com/premium_photo-1692706007797-8451c38ff7db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
            />
          </Tooltip>
          <Tooltip title='thanhdev'>
            <Avatar
              alt='thanhdev'
              src='https://plus.unsplash.com/premium_photo-1665311539742-316504a6ec14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80'
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
