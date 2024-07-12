import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography, Select} from "@mui/material";
import { Button, MenuItem} from '@mui/material';
import FullscreenExitTwoToneIcon from '@mui/icons-material/FullscreenExitTwoTone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './IFTAstyle.css';
import IFTAtable from './IFTAtable';
import TextField from "@mui/material/TextField";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import InputAdornment from '@mui/material/InputAdornment';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import RemoveRoadIcon from '@mui/icons-material/RemoveRoad';


export default function IFTA() {
  const [isTableClickeda, setIsTableClickeda] = useState(false);
  const [openTablea, setOpenTabla] = useState(false);

  // const handleButtonClica = () => setOpenTabla(true);
  const handleCloseTabla = () => setOpenTabla(false);

  const handleInvoiceClick = () => {
      setIsTableClickeda(!isTableClickeda);
  };

    return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginLeft: '50px'}}>
           <Box className="main-container">
               <div>
                   <Box className="header-select-container">
                        <Select defaultValue={10} className="select-dropdown-container" inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem value={10}>This Weak</MenuItem>
                            <MenuItem value={20}>Jan</MenuItem>
                            <MenuItem value={30}>Feb</MenuItem>
                        </Select>
                   </Box>
                   <Box className="header-overview-container">
                        <Typography>Overview</Typography>
                        <FullscreenExitTwoToneIcon fontSize="small" className="icon-exit" />
                   </Box>
               </div>
               <div className="parent1-card-container">
                   <div className="parent-card-container child1-card-container">
                      <Card sx={{ borderRadius: '16px', width:'100%'}}
                          className={`invoice-card-content ${isTableClickeda ? 'active' : ''}`}
                          onClick={handleInvoiceClick}>
                            <CardContent>
                              <Stack direction="row" spacing={2} justifyContent="space-between">
                                <Box className="circular-box circular-box1">
                                  <AddRoadIcon sx={{ fontSize: 55, color: '#01EB90' }} />
                                </Box>
                                  <Typography className='card-content' sx={{ marginLeft: 3 }}>IFTA Miles</Typography>
                                  <Typography className='card-content1'>6,858.5 mi</Typography>
                              </Stack>
                            </CardContent>
                        </Card>
                   </div>

                    <div className="parent-card-container child2-card-container">
                        <Card sx={{ borderRadius: '16px', width:'100%' }}>
                            <CardContent>
                              <Stack direction="row" spacing={2} justifyContent="space-between">
                                <Box className="circular-box circular-box2">
                                  <RemoveRoadIcon sx={{ fontSize: 55, color: '#FF0266' }} />
                                </Box>
                                  <Typography className='card-content'>Non-IFTA Miles</Typography>
                                  <Typography className='card-content1'>0 mi</Typography>
                              </Stack>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="parent-card-container child3-card-container">
                        <Card sx={{ borderRadius: '16px', width:'100%' }}>
                            <CardContent>
                              <Stack direction="row" spacing={2} justifyContent="space-between">
                                <Box className="circular-box circular-box3">
                                  <AddRoadIcon sx={{ fontSize: 55, color: '#0082FB' }} />
                                </Box>
                                  <Typography className='card-content'>Total Miles</Typography>
                                  <Typography className='card-content1'>6,858.8 mi</Typography>
                              </Stack>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="parent-card-container child4-card-container">
                        <Card sx={{ borderRadius: '16px', width:'100%' }}>
                            <CardContent>
                              <Stack direction="row" spacing={2} justifyContent="space-between">
                                <Box className="circular-box circular-box4">
                                  <AddRoadIcon sx={{ fontSize: 55, color: '#FFA229' }} />
                                </Box>
                                  <Typography className='card-content'>Taxable Miles</Typography>
                                  <Typography className='card-content1'>6,858.5 mi</Typography>
                              </Stack>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="parent-card-container child5-card-container">
                        <Card sx={{ borderRadius: '16px', width:'100%' }}>
                            <CardContent>
                              <Stack direction="row" spacing={2} justifyContent="space-between">
                                <Box className="circular-box circular-box5">
                                  <LocalGasStationIcon sx={{ fontSize: 55, color: '#01EB90' }} />
                                </Box>
                                  <Typography className='card-content'>Tax Paid Gallons</Typography>
                                  <Typography className='card-content1'>$ 2028.8</Typography>
                              </Stack>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="parent-card-container child6-card-container">
                        <Card sx={{ borderRadius: '16px', width:'100%' }}>
                            <CardContent>
                              <Stack direction="row" spacing={2} justifyContent="space-between">
                                <Box className="circular-box circular-box6">
                                  <LocalGasStationIcon sx={{ fontSize: 55, color: '#FFA229' }} />
                                </Box>
                                  <Typography className='card-content'>MPG</Typography>
                                  <Typography className='card-content1'>0 mi</Typography>
                              </Stack>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                {isTableClickeda && (
                        <Box className="Table-portion-container">
                            <div className="Table-portionHea-container">
                                <ArrowForwardIcon className="ArrowForwardIcon" />
                                <span className="forward-icon">Jurisdiction Fuel Summary </span>
                                <Typography className="forward-icon1">IFTA (from CDTFA) </Typography>
                            </div>
                            <div className="Table-dropdown-container">
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
                                <Select defaultValue={10} className="Dropdown-container" inputProps={{ 'aria-label': 'Without label' }}>
                                    <MenuItem value={10}>By Date</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                <Button variant="contained" className="Export-btn">
                                    Export
                                    <LogoutIcon className="logoutIcon" />
                                </Button>
                                <IFTAtable openTablea={openTablea} handleCloseTabla={handleCloseTabla} />
                            </div>
                        </Box>
                    )} 
            </Box>
    </Box>
    )
}
