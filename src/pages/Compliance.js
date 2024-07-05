import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {Typography, Select ,Avatar} from "@mui/material";
import FullscreenExitTwoToneIcon from '@mui/icons-material/FullscreenExitTwoTone';
import Card from '@mui/material/Card';
import {Button ,MenuItem ,CardMedia, CardContent, CardActionArea ,CardActions} from '@mui/material';
import ComplianceTable,{ tableData1 } from './ComplianceTable';
import TextField from "@mui/material/TextField";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import InputAdornment from '@mui/material/InputAdornment';
import LogoutIcon from '@mui/icons-material/Logout';
import './Compliance.css'; 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Compliance() {
    const [isTableClicked, setIsTableClicked] = useState(false);
    const [openTable, setOpenTabl] = useState(false);

    const handleButtonClic = () => setOpenTabl(true);
    const handleCloseTabl = () => setOpenTabl(false);

    const handleInvoiceClick = () => {
        setIsTableClicked(!isTableClicked);
    };

    return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginLeft: '50px'}}>
        <Box className="compliance-container">
            <stack>
                <Box className="select-container">
                    <Select
                        className="select-dropdown"
                        inputProps={{ 'aria-label': 'Without label' }}>
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
                                <CardMedia
                                  component="img"
                                  height="140"
                                  image="/static/images/cards/contemplative-reptile.jpg"
                                  alt="green iguana"
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="div">
                                    Big Wings
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    Bigwings is works on transport managment systemwith over 6,000
                                    truks, ranging across all continents except India
                                  </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                              <Button size="small" color="primary">
                                Share
                              </Button>
                            </CardActions>
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
                               }}/>
                            <Select
                                className="selectDropdown"
                                inputProps={{ 'aria-label': 'Without label' }}>
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
    )
}
