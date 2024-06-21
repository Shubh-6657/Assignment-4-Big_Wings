import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FullscreenExitTwoToneIcon from '@mui/icons-material/FullscreenExitTwoTone';
import InsertDriveFileTwoToneIcon from '@mui/icons-material/InsertDriveFileTwoTone';
import PriceChangeTwoToneIcon from '@mui/icons-material/PriceChangeTwoTone';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import { Button, Avatar, Typography, Table, Box, TableHead, TableRow, TableCell, TableBody, Select } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import InputAdornment from '@mui/material/InputAdornment';
import LogoutIcon from '@mui/icons-material/Logout';
import Checkbox from '@mui/material/Checkbox';
import TableContent,{ tableData } from './TableContent';
import ExpensesModal from './ExpensesModal';
import MenuItem from '@mui/material/MenuItem';
import './Accountingstyle.css'; 

export default function Accounting() {
    const [isInvoiceClicked, setIsInvoiceClicked] = useState(false);
    const [isExpensesClicked, setIsExpensesClicked] = useState(false);
    const [isDriverPayClicked, setIsDriverPayClicked] = useState(false);
    const [openTable, setOpenTable] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleButtonClick = () => setOpenTable(true);
    const handleCloseTable = () => setOpenTable(false);

    const handleInvoiceClick = () => {
        setIsInvoiceClicked(!isInvoiceClicked);
        setIsExpensesClicked(false);
        setIsDriverPayClicked(false);
    };

    const handleExpensesClick = () => {
        setIsExpensesClicked(!isExpensesClicked);
        setIsInvoiceClicked(false);
        setIsDriverPayClicked(false);
    };

    const handleDriverPayClick = () => {
        setIsDriverPayClicked(!isDriverPayClicked);
        setIsInvoiceClicked(false);
        setIsExpensesClicked(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Form submission logic
    };

    return (
        <Box className="accounting-container">
            <Box className="select-container">
                <Select
                    className="select-dropdown"
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>This Month</MenuItem>
                    <MenuItem value={20}>Jan</MenuItem>
                    <MenuItem value={30}>Feb</MenuItem>
                </Select>
            </Box>

            <Box className="overview-container">
                <Typography variant="h4" className="overview-title">
                    Overview
                </Typography>
                <FullscreenExitTwoToneIcon fontSize="small" className="icon-exit" />
            </Box>

            <Box className="main-content">
                <Box className="invoice-card">
                    <Card
                        className={`invoice-card-content ${isInvoiceClicked ? 'active' : ''}`}
                        onClick={handleInvoiceClick}
                    >
                        <CardContent>
                            <InsertDriveFileTwoToneIcon fontSize="small" />
                            <Typography gutterBottom variant="h5" className="card-title">
                                Invoice
                            </Typography>
                            <ScreenShareOutlinedIcon className="icon-share" />
                        </CardContent>
                        <CardContent className="card-details" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-23px' }}>
	                        <stack style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
	                            <stack style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar aria-label="recipe" sx={{ width: 24, height: 24, backgroundColor: '#EF0561' }}>
                                        <Typography variant="body2" style={{ fontSize: '10px' }}>15</Typography>
                                    </Avatar>
                                        <Typography variant="body2" style={{ marginLeft: '4px', fontSize: '12px', color: '#EF0561' }}>
                                            Pending
                                        </Typography>
                                </stack>
                                    <Typography variant="body2" style={{ fontSize: '20px', marginLeft: '-17px', marginTop: '8px', color: '#EF0561' }}>
                                        $ 350
                                    </Typography>
                            </stack>
                            <stack style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <stack style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar aria-label="recipe" sx={{ width: 24, height: 24, backgroundColor: '#47B6D0' }}>
                                        <Typography variant="body2" style={{ fontSize: '10px' }}>15</Typography>
                                    </Avatar>
                                        <Typography variant="body2" style={{ marginLeft: '4px', fontSize: '12px', color: '#47B6D0' }}>
                                            Invoice
                                        </Typography>
                                </stack>
                                    <Typography variant="body2" style={{ fontSize: '20px', marginLeft: '-15px', marginTop: '8px', color: '#47B6D0' }}>
                                            $ 200
                                    </Typography>
                            </stack>
                            <stack style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <stack style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar aria-label="recipe" sx={{ width: 24, height: 24, backgroundColor: '#5DEBD7' }}>
                                        <Typography variant="body2" style={{ fontSize: '10px' }}>15</Typography>
                                    </Avatar>
                                        <Typography variant="body2" style={{ marginLeft: '4px', fontSize: '12px', color: '#5DEBD7' }}>
                                            Recived
                                        </Typography>
                                </stack>
                                    <Typography variant="body2" style={{ fontSize: '20px', marginLeft: '-17px', marginTop: '8px', color: '#5DEBD7' }}>
                                        $ 570
                                    </Typography>
                            </stack>
                            <stack style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <stack style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar aria-label="recipe" sx={{ width: 24, height: 24, backgroundColor: '#8576FF' }}>
                                        <Typography variant="body2" style={{ fontSize: '10px' }}>15</Typography>
                                    </Avatar>
                                        <Typography variant="body2" style={{ marginLeft: '4px', fontSize: '12px', color: '#8576FF' }}>
                                            Not Recived
                                        </Typography>
                                </stack>
                                    <Typography variant="body2" style={{ fontSize: '20px', marginLeft: '-37px', marginTop: '8px', color: '#8576FF' }}>
                                        $ 240
                                    </Typography>
                            </stack>
                        </CardContent>
                    </Card>
                    {isInvoiceClicked && (
                        <Box className="invoice-details">
                            <stack>
                                <Typography variant="h4" style={{ fontWeight: 'bold', marginRight: '10px', fontSize: '13px' }}>
                                    Invoices
                                </Typography>
                            </stack>
                            <stack style={{ display: 'flex', gap: '24.5px', marginTop: '10px' }}>
                                <stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                                <Button
                                  variant="outlined"
                                  style={{ fontSize: "9px", height: "25px", padding: "3px 8px" }}
                                  endIcon={
                                    <Avatar variant="square" sx={{ width: 20, height: 20 }}>
                                      <Typography variant="body2" style={{ fontSize: "8px" }}>
                                        45
                                      </Typography>
                                    </Avatar>
                                  }
                                  onClick={handleButtonClick}
                                  >
                                  Pending Invoice
                                </Button>
                                <TableContent openTable={openTable} handleCloseTable={handleCloseTable} />
                                </stack>
                                    <Button
                                        variant="outlined"
                                        style={{ fontSize: '9px', height: '25px', padding: '3px 8px' }}
                                        endIcon={<Avatar variant="square" sx={{ width: 20, height: 20 }}><Typography variant="body2" style={{ fontSize: '8px' }}>25</Typography></Avatar>}
                                    >
                                        Invoiced
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        style={{ fontSize: '9px', height: '25px', padding: '3px 8px' }}
                                        endIcon={<Avatar variant="square" sx={{ width: 20, height: 20 }}><Typography variant="body2" style={{ fontSize: '8px' }}>25</Typography></Avatar>}
                                    >
                                        Received
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        style={{ fontSize: '9px', height: '25px', padding: '3px 8px' }}
                                        endIcon={<Avatar variant="square" sx={{ width: 20, height: 20 }}><Typography variant="body2" style={{ fontSize: '8px' }}>25</Typography></Avatar>}
                                    >
                                        Not Received
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        style={{ fontSize: '9px', height: '25px', padding: '3px 8px', marginRight: '148px'  }}
                                        endIcon={<Avatar variant="square" sx={{ width: 20, height: 20 }}><Typography variant="body2" style={{ fontSize: '8px' }}>45</Typography></Avatar>}
                                    >
                                        Summary
                                    </Button>
                                    <TextField placeholder='With normal TextField' sx={{  width: '25ch' }} size="small" 
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end"><SearchTwoToneIcon /></InputAdornment>,
                                            sx: { height: '25px' }
                                            }}

                                    />
                                    <Select style={{ width: '70px', height: '25px', fontSize: '13px', cursor: 'pointer' }} inputProps={{ 'aria-label': 'Without label' }}>
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>By Date</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    <Button variant="contained" style={{ fontSize: '8px', height: '30px', padding: '3px 8px' }}>
                                        Send Invoice
                                    </Button>
                                <LogoutIcon sx={{ fontSize: 20, height: 20, cursor: 'pointer' }} />
                            </stack>
                        </Box>
                    )}
                </Box>

                <Box className="expenses-card">
                    <Card
                        className={`expenses-card-content ${isExpensesClicked ? 'active' : ''}`}
                        onClick={handleExpensesClick}
                    >
                        <CardContent>
                            <PriceChangeTwoToneIcon fontSize="small" />
                            <Typography gutterBottom variant="h5" className="card-title">
                                Expenses
                            </Typography>
                            <ScreenShareOutlinedIcon className="icon-share" />
                        </CardContent>
                        <CardContent className="card-details" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-23px' }}>
                            <stack style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <stack style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar aria-label="recipe" sx={{ width: 24, height: 24, backgroundColor: '#EF0561' }}>
                                        <Typography variant="body2" style={{ fontSize: '10px' }}>15</Typography>
                                    </Avatar>
                                        <Typography variant="body2" style={{ marginLeft: '4px', fontSize: '12px', color: '#EF0561' }}>
                                            Declined
                                        </Typography>
                                </stack>
                                    <Typography variant="body2" style={{ fontSize: '20px', marginLeft: '-17px', marginTop: '8px', color: '#EF0561' }}>
                                        $ 650
                                    </Typography>
                            </stack>
                            <stack style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <stack style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar aria-label="recipe" sx={{ width: 24, height: 24, backgroundColor: '#5DEBD7' }}>
                                        <Typography variant="body2" style={{ fontSize: '10px' }}>15</Typography>
                                    </Avatar>
                                        <Typography variant="body2" style={{ marginLeft: '4px', fontSize: '12px', color: '#5DEBD7' }}>
                                            Approved
                                        </Typography>
                                </stack>
                                    <Typography variant="body2" style={{ fontSize: '20px', marginLeft: '-20px', marginTop: '8px', color: '#5DEBD7' }}>
                                        $ 300
                                    </Typography>
                            </stack>
                        </CardContent>
                    </Card>
                    {isExpensesClicked && (
                        <Box className="expenses-details">
                            <stack>
                                <Typography variant="h4" style={{ fontWeight: 'bold', marginRight: '10px', fontSize: '13px' }}>
                                    Expenses
                                </Typography>
                            </stack>
                            <stack style={{ display: 'flex', gap: '18px', marginTop: '10px' }}>
                                <stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                                <Button
                                  variant="outlined"
                                  style={{ fontSize: "9px", height: "25px", padding: "3px 8px" }}
                                  endIcon={
                                    <Avatar variant="square" sx={{ width: 20, height: 20 }}>
                                      <Typography variant="body2" style={{ fontSize: "8px" }}>
                                        25
                                      </Typography>
                                    </Avatar>
                                  }
                                  onClick={handleButtonClick}
                                >
                                  All
                                </Button>
                                </stack>
                                {openTable && (
                                    <div style={{ position: 'absolute', top: 85, left: 1, backgroundColor: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)' }}>
                                        <Box sx={{ border: "1px solid #ccc", borderRadius: 4, padding: 2 }}>
                                          {/* <Typography variant="h6" gutterBottom>
                                            All
                                          </Typography> */}
                                            <Box sx={{maxHeight: '300px', overflowY: 'auto',}}>
                                                <Table>
                                                  <TableHead>
                                                    <TableRow>
                                                      <TableCell style={{ whiteSpace: 'nowrap', paddingRight: '94px' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                          <Checkbox />
                                                          <Typography style={{ fontWeight: 'bold', marginLeft: '5px' }}>Receipt No.</Typography>
                                                        </div>
                                                      </TableCell>
                                                      <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '97px' }}>Merchant</TableCell>
                                                      <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '72px' }}>Stop Location</TableCell>
                                                      <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '94px' }}>Date</TableCell>
                                                      <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '94px' }}>Paid By</TableCell>
                                                      <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '28px' }}>
                                                        Total Amount
                                                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1px' }}>
                                                          <Box
                                                            sx={{
                                                              width: 10,
                                                              height: 10,
                                                              borderRadius: 1,
                                                              display: 'inline-block',
                                                              bgcolor: 'green',
                                                              '&:hover': {
                                                                bgcolor: 'darkgreen',
                                                              },
                                                            }}
                                                          />
                                                          <Typography variant="body2" style={{ marginLeft: '5px' }}>Approved</Typography>
                                                          <Box
                                                            sx={{
                                                              width: 10,
                                                              height: 10,
                                                              marginLeft: 1,
                                                              borderRadius: 1,
                                                              display: 'inline-block',
                                                              bgcolor: 'red',
                                                              '&:hover': {
                                                                bgcolor: 'darkred',
                                                              },
                                                            }}
                                                          />
                                                          <Typography variant="body2" style={{ marginLeft: '5px' }}>Declined</Typography>
                                                        </div>
                                                      </TableCell>
                                                    </TableRow>
                                                  </TableHead>
                                                  <TableBody>
                                                    {tableData.map((row, index) => (
                                                      <TableRow key={index}>
                                                        <TableCell style={{ paddingRight: '125px' }}>
                                                          <Checkbox />
                                                          {row.invoiceNo}
                                                        </TableCell>
                                                        <TableCell>{row.customerName}</TableCell>
                                                        <TableCell>{row.stopLocation}</TableCell>
                                                        <TableCell>{row.dueDate}</TableCell>
                                                        <TableCell>{row.customerName}</TableCell>
                                                        <TableCell>{row.invoice}</TableCell>
                                                      </TableRow>
                                                    ))}
                                                  </TableBody>
                                                </Table>
                                            </Box>
                                            {/* Button to close table */}
                                            <Button variant="outlined" onClick={handleCloseTable}>
                                              Close Table
                                            </Button>
                                        </Box>
                                    </div>
                                )}
                                <Button
                                    variant="outlined"
                                    style={{ fontSize: '9px', height: '25px', padding: '3px 8px' }}
                                    endIcon={<Avatar variant="square" sx={{ width: 20, height: 20 }}><Typography variant="body2" style={{ fontSize: '8px' }}>17</Typography></Avatar>}
                                >
                                    Approved
                                </Button>
                                <Button
                                    variant="outlined"
                                    style={{ fontSize: '9px', height: '25px', padding: '3px 8px', marginRight: '430px'  }}
                                    endIcon={<Avatar variant="square" sx={{ width: 20, height: 20 }}><Typography variant="body2" style={{ fontSize: '8px' }}>17</Typography></Avatar>}
                                >
                                    Declined
                                </Button>
                                <TextField placeholder='With normal TextField' sx={{  width: '25ch' }} size="small" 
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><SearchTwoToneIcon /></InputAdornment>,
                                        sx: { height: '25px' }
                                        }}

                                />
                                <Select style={{ width: '70px', height: '25px', fontSize: '13px', cursor: 'pointer' }} inputProps={{ 'aria-label': 'Without label' }}>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>By Date</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                <stack style={{ position: 'relative' }}>
                                  <Button variant="contained" style={{ fontSize: '8px', height: '30px', padding: '3px 8px' }} onClick={handleOpen}>Add Expenses</Button>
                                  <ExpensesModal open={open} handleClose={handleClose} handleFormSubmit={handleFormSubmit} />
                                </stack>
                                <LogoutIcon sx={{ fontSize: 20, height: 20, cursor: 'pointer' }} />
                            </stack>
                        </Box>
                    )}
                </Box>

                <Box className="driverpay-card">
                    <Card
                        className={`driverpay-card-content ${isDriverPayClicked ? 'active' : ''}`}
                        onClick={handleDriverPayClick}
                    >
                        <CardContent>
                            <PriceChangeTwoToneIcon fontSize="small" />
                            <Typography gutterBottom variant="h5" className="card-title">
                                Driver Pay
                            </Typography>
                            <ScreenShareOutlinedIcon className="icon-share" />
                        </CardContent>
                        <CardContent className="card-details">
                        <stack style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <stack style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar aria-label="recipe" sx={{ width: 24, height: 24, backgroundColor: '#EF0561' }}>
                                        <Typography variant="body2" style={{ fontSize: '10px' }}>15</Typography>
                                    </Avatar>
                                        <Typography variant="body2" style={{ marginLeft: '4px', fontSize: '12px', color: '#EF0561' }}>
                                            Declined
                                        </Typography>
                                </stack>
                                    <Typography variant="body2" style={{ fontSize: '20px', marginLeft: '-17px', marginTop: '8px', color: '#EF0561' }}>
                                        $ 650
                                    </Typography>
                            </stack>
                            <stack style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <stack style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar aria-label="recipe" sx={{ width: 24, height: 24, backgroundColor: '#5DEBD7' }}>
                                        <Typography variant="body2" style={{ fontSize: '10px' }}>15</Typography>
                                    </Avatar>
                                        <Typography variant="body2" style={{ marginLeft: '4px', fontSize: '12px', color: '#5DEBD7' }}>
                                            Paid
                                        </Typography>
                                </stack>
                                    <Typography variant="body2" style={{ fontSize: '20px', marginLeft: '7px', marginTop: '8px', color: '#5DEBD7' }}>
                                        $ 300
                                    </Typography>
                            </stack>
                        </CardContent>
                    </Card>
                    {isDriverPayClicked && (
                        <Box className="driverpay-details">
                            <stack>
                                <Typography variant="h4" style={{ fontWeight: 'bold', marginRight: '10px', fontSize: '13px' }}>
                                    Invoices
                                </Typography>
                            </stack>
                            <stack style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                                <stack>
                                <Button
                                  variant="outlined"
                                  style={{ fontSize: "9px", height: "25px", padding: "3px 8px" }}
                                  endIcon={
                                    <Avatar variant="square" sx={{ width: 20, height: 20 }}>
                                      <Typography variant="body2" style={{ fontSize: "8px" }}>
                                        17
                                      </Typography>
                                    </Avatar>
                                  }
                                  onClick={handleButtonClick}
                                    >
                                    Paid
                                </Button>
                                </stack>
                                {openTable && (
                                    <stack style={{ position: 'absolute', top: 85, left: 1, backgroundColor: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)' }}>
                                        <Box sx={{ border: "1px solid #ccc", borderRadius: 4, padding: 2 }}>
                                            <Box sx={{maxHeight: '300px', overflowY: 'auto',}}>
                                                <Table>
                                                    <TableHead>
                                                        <TableRow>
                                                          <TableCell style={{ whiteSpace: 'nowrap', paddingRight: '14px' }}>
                                                              <stack style={{ display: 'flex', alignItems: 'center' }}>
                                                                  <Checkbox
                                                                  />
                                                                  <Typography style={{ fontWeight: 'bold', marginLeft: '5px' }}>Driver Name</Typography>
                                                              </stack>
                                                          </TableCell>
                                                          <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '15px' }}>License No.</TableCell>
                                                          <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '12px' }}>Delivery Date</TableCell>
                                                          <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '8px' }}>Total Amount</TableCell>
                                                          <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '17px' }}>Load No.</TableCell>
                                                          <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '10px' }}>Empty Miles</TableCell>
                                                          <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '10px' }}>Loaded Miles</TableCell>
                                                          <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '11px' }}>Gross Revenue</TableCell>
                                                          <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '4px' }}>
                                                              Expense
                                                              <stack style={{ display: 'flex', alignItems: 'center', marginTop: '1px' }}>
                                                                <Box
                                                                  sx={{ width: 10,height: 10,borderRadius: 1,display: 'inline-block',bgcolor: 'green','&:hover': {bgcolor: 'darkgreen',},
                                                                  }}
                                                                />
                                                                  <Typography variant="body2" style={{ marginLeft: '5px' }}>Paid</Typography>
                                                                <Box
                                                                  sx={{ width: 10,height: 10,marginLeft: 1,borderRadius: 1,display: 'inline-block',bgcolor: 'red','&:hover': {bgcolor: 'darkred', },}}
                                                                />
                                                                  <Typography variant="body2" style={{ marginLeft: '5px' }}>Pending</Typography>
                                                              </stack>
                                                          </TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                      {tableData.map((row, index) => (
                                                        <TableRow key={index}>
                                                        <TableCell style={{ paddingRight: '5px' }}>
                                                            <Checkbox />
                                                            {row.customerName}
                                                        </TableCell>
                                                        <TableCell>{row.licenseNo}</TableCell>
                                                        <TableCell>{row.dueDate}</TableCell>
                                                        <TableCell>{row.totalAmount}</TableCell>
                                                        <TableCell>{row.loadNo}</TableCell>
                                                        <TableCell>{row.emptyMiles}</TableCell>
                                                        <TableCell>{row.loadedMiles}</TableCell>
                                                        <TableCell>{row.grossRevenue}</TableCell>
                                                        <TableCell>{row.invoice}</TableCell>
                                                        </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </Box>
                                            <Button variant="outlined" onClick={handleCloseTable}>
                                                Close Table
                                            </Button>
                                        </Box>
                                    </stack>
                                )}
                                <Button
                                    variant="outlined"
                                    style={{ fontSize: '9px', height: '25px', padding: '3px 8px', marginRight: '560px'  }}
                                    endIcon={<Avatar variant="square" sx={{ width: 20, height: 20 }}><Typography variant="body2" style={{ fontSize: '8px' }}>17</Typography></Avatar>}
                                >
                                    Pending
                                </Button>
                                <TextField placeholder='With normal TextField' sx={{  width: '25ch' }} size="small" 
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><SearchTwoToneIcon /></InputAdornment>,
                                        sx: { height: '25px' }
                                        }}

                                />
                                <Select style={{ width: '70px', height: '25px', fontSize: '13px', cursor: 'pointer' }} inputProps={{ 'aria-label': 'Without label' }}>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>By Date</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                <Button variant="contained" style={{ fontSize: '8px', height: '30px', padding: '3px 8px' }}>
                                    Unpay
                                </Button>       
                                <LogoutIcon sx={{ fontSize: 20, height: 20, cursor: 'pointer' }} />
                            </stack>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
