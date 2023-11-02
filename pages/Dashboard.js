import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';

export function Dashboarda() {
    const theme = useTheme();
    const [open1, setOpen1] = React.useState(true);

      const handleClick1 = () => {
        setOpen1(!open1);
      };

return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />

    <List> 

<ListItemButton onClick={handleClick1}>
          <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>

      </List>

      </Box>

);
}
