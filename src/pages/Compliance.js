import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography, Select, Avatar, LinearProgress, Stack } from "@mui/material";
import FullscreenExitTwoToneIcon from '@mui/icons-material/FullscreenExitTwoTone';
import Card from '@mui/material/Card';
import { Button, MenuItem, CardActionArea } from '@mui/material';
import ComplianceTable, { tableData1 } from './ComplianceTable';
import TextField from "@mui/material/TextField";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import InputAdornment from '@mui/material/InputAdornment';
import LogoutIcon from '@mui/icons-material/Logout';
import './Compliance.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { GridColumn } from 'semantic-ui-react';
import Divider from '@mui/material/Divider';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Compliance() {
    const [isTableClicked, setIsTableClicked] = useState(false);
    const [openTable, setOpenTabl] = useState(false);

    const handleButtonClic = () => setOpenTabl(true);
    const handleCloseTabl = () => setOpenTabl(false);

    const handleInvoiceClick = () => {
        setIsTableClicked(!isTableClicked);
    };

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: '50px' }}>
            <Box className="compliance-container">
                <stack>
                    <Box className="select-container">
                        <Select className="select-dropdown" inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>This Month</MenuItem>
                            <MenuItem value={20}>Jan</MenuItem>
                            <MenuItem value={30}>Feb</MenuItem>
                        </Select>
                    </Box>
                    <Box className="overview-container">
                        <Typography>Overview</Typography>
                        <FullscreenExitTwoToneIcon fontSize="small" className="icon-exit" />
                    </Box>
                </stack>
                <stack>
                    <Box className="Cards">
                        <Box className="Card1">
                            <Card
                                className={`invoice-card-content ${isTableClicked ? 'active' : ''}`}
                                onClick={handleInvoiceClick}>
                                <CardActionArea>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container className="grid-container">
                                            <GridColumn>
                                                <Box className="ele1">
                                                    <Typography variant="h6">HOS Violations</Typography>
                                                    <div class="flex-container">
                                                        <div className="element1">
                                                            <LinearProgress className="Progress-bar" variant="determinate" value={50} />
                                                            <LinearProgress className="Progress-bar" variant="determinate" value={70} />
                                                        </div>
                                                        <div className='ho'>
                                                            <div>
                                                                <Select className="selectDropdown1" inputProps={{ 'aria-label': 'Without label' }}>
                                                                    <MenuItem value="">
                                                                        <em>None</em>
                                                                    </MenuItem>
                                                                    <MenuItem value={10}>By Date</MenuItem>
                                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                                </Select>
                                                            </div>
                                                            <div class="flex-container">
                                                                <div className="inViolationStack1">
                                                                    <Box className="violationBox" />
                                                                    <Typography variant="body2" className="violationTypography">In Violation</Typography>

                                                                </div>
                                                                <Divider orientation="vertical" variant="middle" flexItem />
                                                                <div className="inViolationStack2">
                                                                    <Box className="violationBox" />
                                                                    <Typography variant="body2" className="violationTypography">In Violation</Typography>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </Box>

                                            </GridColumn>
                                            <Divider orientation="vertical" variant="middle" flexItem />

                                            <GridColumn>
                                                <Box sx={{ padding: '16px' }}>
                                                    <Typography variant="h6">Unassigned Driving</Typography>
                                                    <div class="flex-container">
                                                        <div className="element1">
                                                            <LinearProgress className="Progress-bar" variant="determinate" value={50} />
                                                            <LinearProgress className="Progress-bar" variant="determinate" value={70} />
                                                        </div>
                                                        <div>
                                                            <Select className="selectDropdown1" inputProps={{ 'aria-label': 'Without label' }}>
                                                                <MenuItem value="">
                                                                    <em>None</em>
                                                                </MenuItem>
                                                                <MenuItem value={10}>By Date</MenuItem>
                                                                <MenuItem value={20}>Twenty</MenuItem>
                                                                <MenuItem value={30}>Thirty</MenuItem>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </GridColumn>
                                            <Divider orientation="vertical" variant="middle" flexItem />

                                            <GridColumn>
                                                <Box sx={{ padding: '16px' }}>
                                                    <Typography variant="h6">Unassigned Segment</Typography>
                                                    <LinearProgress variant="determinate" value={50} />
                                                    <LinearProgress variant="determinate" value={70} />
                                                </Box>
                                            </GridColumn>

                                        </Grid>

                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Box>

                    {isTableClicked && (
                        <Box className="table-details">
                            <stack className="driverHOSContainer">
                                <ArrowForwardIcon className="arrowForwardIcon" />
                                <span className="DriverHOS">Driver HOS</span>
                            </stack>
                            <stack className="TableHeader">
                                <TextField
                                    placeholder='With normal TextField'
                                    className="textField1"
                                    size="small"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SearchTwoToneIcon />
                                            </InputAdornment>
                                        ),
                                        classes: { input: 'MuiInputBase-input' }
                                    }} />
                                <Select className="selectDropdown" inputProps={{ 'aria-label': 'Without label' }}>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>By Date</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                <Button variant="contained" className="export">
                                    Export
                                    <LogoutIcon className="logoutIcon" />
                                </Button>
                            </stack>
                            <stack className="stack">
                                <stack className="stackColumn">
                                    <Button
                                        variant="outlined"
                                        className="buttonOutlined buttonWithMargin"
                                        endIcon={
                                            <Avatar variant="square" className="avatar">
                                                <Typography variant="body2" className="typography">
                                                    17
                                                </Typography>
                                            </Avatar>
                                        }
                                        onClick={handleButtonClic}>
                                        Driver HOS
                                    </Button>
                                    <ComplianceTable openTable={openTable} handleCloseTabl={handleCloseTabl} />
                                    <Button
                                        variant="outlined"
                                        className="buttonOutlined buttonWithMargin"
                                        endIcon={
                                            <Avatar variant="square" className="avatar">
                                                <Typography variant="body2" className="typography">17</Typography>
                                            </Avatar>}>
                                        HOS Violation
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        className="buttonOutlined buttonWithMargin"
                                        endIcon={
                                            <Avatar variant="square" className="avatar">
                                                <Typography variant="body2" className="typography">17</Typography>
                                            </Avatar>}>
                                        Unassigned HOS
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        className="buttonOutlined buttonWithMargin"
                                        endIcon={
                                            <Avatar variant="square" className="avatar">
                                                <Typography variant="body2" className="typography">17</Typography>
                                            </Avatar>}>
                                        Logs Edits
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        className="buttonOutlined buttonWithMargin"
                                        endIcon={
                                            <Avatar variant="square" className="avatar">
                                                <Typography variant="body2" className="typography">17</Typography>
                                            </Avatar>}>
                                        Driver HOS Audit
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        className="buttonOutlined buttonWithMargin"
                                        endIcon={
                                            <Avatar variant="square" className="avatar">
                                                <Typography variant="body2" className="typography">17</Typography>
                                            </Avatar>}>
                                        Duty Status Summary
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        className="buttonOutlined buttonWithMargin"
                                        endIcon={
                                            <Avatar variant="square" className="avatar">
                                                <Typography variant="body2" className="typography">17</Typography>
                                            </Avatar>}>
                                        HOS Audit Transfer
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        className="buttonOutlined buttonWithMargin"
                                        endIcon={
                                            <Avatar variant="square" className="avatar">
                                                <Typography variant="body2" className="typography">17</Typography>
                                            </Avatar>}>
                                        Diagnostics & Malfunctions
                                    </Button>
                                </stack>
                            </stack>
                        </Box>
                    )}
                </stack>
            </Box>
        </Box>
    );
}
