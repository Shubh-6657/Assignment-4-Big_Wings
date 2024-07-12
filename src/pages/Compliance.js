import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography, Select, Avatar, LinearProgress } from "@mui/material";
import FullscreenExitTwoToneIcon from '@mui/icons-material/FullscreenExitTwoTone';
import Card from '@mui/material/Card';
import { Button, MenuItem, CardActionArea } from '@mui/material';
// import ComplianceTable, { tableData1 } from './ComplianceTable';
import ComplianceTable from './ComplianceTable';
import TextField from "@mui/material/TextField";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import InputAdornment from '@mui/material/InputAdornment';
import LogoutIcon from '@mui/icons-material/Logout';
import './Compliance.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';
import { GridColumn } from 'semantic-ui-react';
import Divider from '@mui/material/Divider';


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
                <div>
                    <Box className="select-container">
                        <Select defaultValue={10} className="select-dropdown" inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem value={10}>This Weak</MenuItem>
                            <MenuItem value={20}>Jan</MenuItem>
                            <MenuItem value={30}>Feb</MenuItem>
                        </Select>
                    </Box>
                    <Box className="overview-container">
                        <Typography>Overview</Typography>
                        <FullscreenExitTwoToneIcon fontSize="small" className="icon-exit" />
                    </Box>
                </div>
                <div>
                    <Box className="Card">
                        <Box className="Card-first">
                            <Card
                                className={`invoice-card-content ${isTableClicked ? 'active' : ''}`}
                                onClick={handleInvoiceClick}>
                                <CardActionArea>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container className="grid-container">
                                            <GridColumn className='column-grid'>
                                                <Box className="sections">
                                                    <Typography variant="h6">HOS Violations</Typography>
                                                    <div class="flex-container">
                                                        <div className="element1">
                                                            <LinearProgress className="Progress-bar pp" variant="determinate" value={60} />
                                                            <LinearProgress className="Progress-bar" variant="determinate" value={70} />
                                                            <div className="abc">
                                                                <div className="inViolation">
                                                                    <Box className="violationBox1" />
                                                                    <Typography variant="body2" className="violationTypography">Days=8</Typography>
                                                                </div>
                                                                <div className="inViolation">
                                                                    <Box className="violationBox1" />
                                                                    <Typography variant="body2" className="violationTypography">Drivers=8</Typography>
                                                                </div>
                                                                <div className="inViolation">
                                                                    <Box className="violationBox1" />
                                                                    <Typography variant="body2" className="violationTypography">Hours=24</Typography>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='section1-part2'>
                                                            <div>
                                                                <Select  defaultValue={10} className="selectDropdown1" inputProps={{ 'aria-label': 'Without label' }}>
                                                                    <MenuItem value={10}>By Date</MenuItem>
                                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                                </Select>
                                                            </div>
                                                            <div class="flex-container1">
                                                                <div className="inViolationStack1">
                                                                    <Box className="violationBox" />
                                                                    <Typography variant="body2" className="violationTypography">In Violations</Typography>
                                                                    <Divider orientation="vertical" variant="middle" flexItem />
                                                                    <Typography variant="body2" className="violationTypography"> 0 hour</Typography>

                                                                </div>
                                                            </div>
                                                            <div class="flex-container1">    
                                                                <div className="inViolationStack2">
                                                                    <Box className="violationBox" />
                                                                    <Typography variant="body2" className="violationTypography"> Compliant</Typography>
                                                                    <Divider orientation="vertical" variant="middle" flexItem />
                                                                    <Typography variant="body2" className="violationTypography"> 1536 hrs</Typography>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </GridColumn>


                                            <GridColumn className='column-grid'>
                                                <Box className="sections">
                                                    <Typography variant="h6">Unassigned Driving</Typography>
                                                    <div class="flex-container">
                                                        <div className="element1">
                                                            <LinearProgress className="Progress-bar pp" variant="determinate" value={60} />
                                                            <LinearProgress className="Progress-bar" variant="determinate" value={70} />
                                                        </div>
                                                        <div className='section2-part2'>
                                                            <div class="flex-container1">
                                                                <div className="inViolationStack1">
                                                                    <Box className="violationBox" />
                                                                    <Typography variant="body2" className="violationTypography">Unassigned</Typography>
                                                                    <Divider orientation="vertical" variant="middle" flexItem />
                                                                    <Typography variant="body2" className="violationTypography"> 1 hour 42 min</Typography>

                                                                </div>
                                                            </div>
                                                            <div class="flex-container1">    
                                                                <div className="inViolationStack2">
                                                                    <Box className="violationBox" />
                                                                    <Typography variant="body2" className="violationTypography">Managed</Typography>
                                                                    <Divider orientation="vertical" variant="middle" flexItem />
                                                                    <Typography variant="body2" className="violationTypography"> 1 hrs 48 min</Typography>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </GridColumn>


                                            <GridColumn className='column-grid'>
                                            <Box className="sections3">
                                                    <Typography variant="h6">Unassigned Segement</Typography>
                                                    <div class="flex-container">
                                                        <div className="element1">
                                                            <LinearProgress className="Progress-bar pp" variant="determinate" value={60} />
                                                            <LinearProgress className="Progress-bar" variant="determinate" value={70} />
                                                            <div className="abc">
                                                                <div className="inViolation">
                                                                    <Box className="violationBox1" />
                                                                    <Typography variant="body2" className="violationTypography">Segments=8</Typography>
                                                                </div>
                                                                <div className="inViolation">
                                                                    <Box className="violationBox1" />
                                                                    <Typography variant="body2" className="violationTypography">Hours=24min</Typography>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='ho'>
                                                            <div>
                                                                <Select  defaultValue={10} className="selectDropdown1" inputProps={{ 'aria-label': 'Without label' }}>
                                                                    <MenuItem value={10}>Segments</MenuItem>
                                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                                </Select>
                                                            </div>
                                                            <div class="flex-container1">
                                                                <div className="inViolationStack1">
                                                                    <Box className="violationBox" />
                                                                    <Typography variant="body2" className="violationTypography">Unassigned</Typography>
                                                                    <Divider orientation="vertical" variant="middle" flexItem />
                                                                    <Typography variant="body2" className="violationTypography"> 0 hour</Typography>

                                                                </div>
                                                            </div>
                                                            <div class="flex-container1">    
                                                                <div className="inViolationStack2">
                                                                    <Box className="violationBox" />
                                                                    <Typography variant="body2" className="violationTypography">Managed</Typography>
                                                                    <Divider orientation="vertical" variant="middle" flexItem />
                                                                    <Typography variant="body2" className="violationTypography"> 48 mins</Typography>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
                            <div className="driverHOSContainer">
                                <ArrowForwardIcon className="arrowForwardIcon" />
                                <span className="DriverHOS">Driver HOS</span>
                            </div>
                            <div className="TableHeader">
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
                                <Select defaultValue={10} className="selectDropdown1" inputProps={{ 'aria-label': 'Without label' }}>
                                    <MenuItem value={10}>By Date</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                <Button variant="contained" className="export">
                                    Export
                                    <LogoutIcon className="logoutIcon" />
                                </Button>
                            </div>
                            <div className="stack">
                                <div className="stackColumn">
                                    <div className="button">
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
                                    </div>
                                    <div className="button">
                                    <Button
                                        variant="outlined"
                                        className="buttonOutlined buttonWithMargin"
                                        endIcon={
                                            <Avatar variant="square" className="avatar">
                                                <Typography variant="body2" className="typography">17</Typography>
                                            </Avatar>}>
                                        HOS Violation
                                    </Button>
                                    </div>
                                    <div className="button">
                                    <Button
                                        variant="outlined"
                                        className="buttonOutlined buttonWithMargin"
                                        endIcon={
                                            <Avatar variant="square" className="avatar">
                                                <Typography variant="body2" className="typography">17</Typography>
                                            </Avatar>}>
                                        Unassigned HOS
                                    </Button>
                                    </div>
                                    <div className="button">
                                    <Button
                                        variant="outlined"
                                        className="buttonOutlined buttonWithMargin"
                                        endIcon={
                                            <Avatar variant="square" className="avatar">
                                                <Typography variant="body2" className="typography">17</Typography>
                                            </Avatar>}>
                                        Logs Edits
                                    </Button>
                                    </div>
                                    <div className="button">
                                    <Button
                                        variant="outlined"
                                        className="buttonOutlined buttonWithMargin"
                                        endIcon={
                                            <Avatar variant="square" className="avatar">
                                                <Typography variant="body2" className="typography">17</Typography>
                                            </Avatar>}>
                                        Driver HOS Audit
                                    </Button>
                                    </div>
                                    <div className="button">
                                    <Button
                                        variant="outlined"
                                        className="buttonOutlined buttonWithMargin"
                                        endIcon={
                                            <Avatar variant="square" className="avatar">
                                                <Typography variant="body2" className="typography">17</Typography>
                                            </Avatar>}>
                                        Duty Status Summary
                                    </Button>
                                    </div>
                                    <div className="button">
                                    <Button
                                        variant="outlined"
                                        className="buttonOutlined buttonWithMargin"
                                        endIcon={
                                            <Avatar variant="square" className="avatar">
                                                <Typography variant="body2" className="typography">17</Typography>
                                            </Avatar>}>
                                        HOS Audit Transfer
                                    </Button>
                                    </div>
                                    <div className="button">
                                    <Button
                                        variant="outlined"
                                        className="buttonOutlined buttonWithMargin"
                                        endIcon={
                                            <Avatar variant="square" className="avatar">
                                                <Typography variant="body2" className="typography">17</Typography>
                                            </Avatar>}>
                                        Diagnostics & Malfunctions
                                    </Button>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    )}
                </div>
            </Box>
        </Box>
    );
}
