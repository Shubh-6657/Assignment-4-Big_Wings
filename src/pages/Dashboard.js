import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function DashBoard() {

    return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginLeft: '50px'}}>
    <Typography paragraph variant="body1">
    Welcome to the
    </Typography>
    <Typography paragraph>
    Dashboard Portion
    </Typography>
    </Box>
    )
}
