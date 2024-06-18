import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import ForumIcon from '@mui/icons-material/Forum';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import img2 from './images/Logo.png';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import GavelIcon from '@mui/icons-material/Gavel';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from '@mui/material/Link';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const storedMode = localStorage.getItem('themeMode') || 'light';
  const [mode, setMode] = React.useState(storedMode);
  
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('themeMode', newMode);
          return newMode;
        });
      },
    }),
    [],
  );

  const theme1 = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = ['Setting 1', 'Setting 2', 'Setting 3'];
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const [open4, setOpen4] = React.useState(true);
  const [open5, setOpen5] = React.useState(true);
  const [open6, setOpen6] = React.useState(true);
  const [open7, setOpen7] = React.useState(true);
  const [open8, setOpen8] = React.useState(true);
  const [open9, setOpen9] = React.useState(true);
  const [open10, setOpen10] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const handleClick4 = () => {
    setOpen4(!open4);
  };

  const handleClick5 = () => {
    setOpen5(!open5);
  };

  const handleClick6 = () => {
    setOpen6(!open6);
  };

  const handleClick7 = () => {
    setOpen7(!open7);
  };

  const handleClick8 = () => {
    setOpen8(!open8);
  };

  const handleClick9 = () => {
    setOpen9(!open9);
  };

  const handleClick10 = () => {
    setOpen10(!open10);
  };
  const drawerContent = (
    <>
      <DrawerHeader>
        <div>
          <img
            src={img2}
            style={{ height: '48px', width: '188px' }}
            alt="Dynamic Portage Salarial"
          />
        </div>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <Box sx={{ typography: 'body1' }}>
          <ListItemButton onClick={handleClick1}>
            <Link href="/dashboard" sx={{ display: 'flex' }}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </Link>
            {open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <ListItemButton onClick={handleClick2}>
            <Link href="/dispatch" sx={{ display: 'flex' }}>
              <ListItemIcon>
                <FireTruckIcon />
              </ListItemIcon>
              <ListItemText primary="Dispatch Board" />
            </Link>
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <ListItemButton onClick={handleClick3}>
            <Link href="/vehicle" sx={{ display: 'flex' }}>
              <ListItemIcon>
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary="Vehicle" />
            </Link>
            {open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <ListItemButton onClick={handleClick4}>
            <Link href="/drivers" sx={{ display: 'flex' }}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Drivers" />
            </Link>
            {open4 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <ListItemButton onClick={handleClick5}>
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <Link href="/accounting"><ListItemText primary="Accounting" /></Link>
            {open5 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <ListItemButton onClick={handleClick6}>
            <ListItemIcon>
              <TextSnippetIcon />
            </ListItemIcon>
            <Link href="/reports"><ListItemText primary="Reports" /></Link>
            {open6 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <ListItemButton onClick={handleClick7}>
            <ListItemIcon>
              <GavelIcon />
            </ListItemIcon>
            <Link href="/compliance"><ListItemText primary="Compliance" /></Link>
            {open7 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <ListItemButton onClick={handleClick8}>
            <ListItemIcon>
              <LocalGasStationIcon />
            </ListItemIcon>
            <Link href="/ifta"><ListItemText primary="IFTA" /></Link>
            {open8 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <ListItemButton onClick={handleClick9}>
            <ListItemIcon>
              <BookmarkAddedIcon />
            </ListItemIcon>
            <Link href="/inspection"><ListItemText primary="Inspection" /></Link>
            {open9 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <ListItemButton onClick={handleClick10}>
            <ListItemIcon>
              <MoreHorizIcon />
            </ListItemIcon>
            <Link href="/more"><ListItemText primary="More" /></Link>
            {open10 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </Box>
      </List>
      <Divider />
    </>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme1}>
          <CssBaseline />
          {/* AppBar */}
          <AppBar position="fixed" open={open}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: 'none' }),
                  display: { xs: 'none', md: 'inline' } 
                }}
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open mobile drawer"
                edge="start"
                onClick={handleMobileDrawerToggle}
                sx={{
                  marginRight: 5,
                  display: { xs: 'inline', md: 'none' }
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                <ul style={{ display: 'flex', listStyle: 'none', padding: '0' }}>
                </ul>
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MyApp />
                <IconButton type="button" aria-label="search" sx={{ fontSize: '36px', padding: { xs: '5px', md: '10px' } }} color="inherit">
                  <SearchIcon />
                </IconButton>
                <IconButton type="button" aria-label="search" sx={{ fontSize: '36px', padding: { xs: '5px', md: '10px' } }} color="inherit">
                  <CalendarMonthIcon />
                </IconButton>
                <IconButton type="button" aria-label="search" sx={{ fontSize: '36px', padding: { xs: '5px', md: '10px' } }} color="inherit">
                  <SettingsIcon />
                </IconButton>
                <IconButton sx={{ fontSize: '36px', padding: { xs: '5px', md: '16px' } }} aria-label="show 1 new notifications" color="inherit">
                  <Badge badgeContent={1} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton type="button" aria-label="search" sx={{ fontSize: '36px', padding: { xs: '5px', md: '10px' } }} color="inherit">
                  <ForumIcon />
                </IconButton>
                <IconButton type="button" aria-label="search" sx={{ fontSize: '36px', padding: { xs: '5px', md: '10px' } }} color="inherit">
                  <MenuOpenIcon />
                </IconButton>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ width: 32, height: 32 }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open} sx={{ display: { xs: 'none', md: 'block' } }}>
            {drawerContent}
          </Drawer>
          <SwipeableDrawer
            variant="temporary"
            open={mobileOpen}
            onOpen={handleMobileDrawerToggle}
            onClose={handleMobileDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            {drawerContent}
          </SwipeableDrawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Box>
  );
}
