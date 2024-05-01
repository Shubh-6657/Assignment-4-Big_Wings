import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FullscreenExitTwoToneIcon from '@mui/icons-material/FullscreenExitTwoTone';
import InsertDriveFileTwoToneIcon from '@mui/icons-material/InsertDriveFileTwoTone';
import PriceChangeTwoToneIcon from '@mui/icons-material/PriceChangeTwoTone';
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
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

export default function Accounting() {
    const [isInvoiceClicked, setIsInvoiceClicked] = useState(false);
    const [isExpensesClicked, setIsExpensesClicked] = useState(false);
    const [isDriverPayClicked, setIsDriverPayClicked] = useState(false);
    const [openTable, setOpenTable] = React.useState(false);
    // const [openTable1, setOpenTable1] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleButtonClick = () => {
      setOpenTable(true);
    };

    // const handleButtonClick1 = () => {
    //     setOpenTable1(true);
    //   };
  
    const handleCloseTable = () => {
      setOpenTable(false);
    };

    // const handleCloseTable1 = () => { 
    //     setOpenTable1(false);
    //   };

    const handleInvoiceClick = () => {
        setIsInvoiceClicked(!isInvoiceClicked);
    };

    const handleExpensesClick = () => {
        setIsExpensesClicked(!isExpensesClicked);
    };

    const handleDriverPayClick = () => {
        setIsDriverPayClicked(!isDriverPayClicked);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        //form submission logic
      };

    //   const style1 = {
    //     py: 0,
    //     width: '100%',
    //     maxWidth: 360,
    //     borderRadius: 2,
    //     border: '10px solid',
    //     borderColor: 'divider',
    //     backgroundColor: 'background.paper',
    //   };
       
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <stack style={{ position: 'absolute', top: 70, right: 27 }}>
            <Select sx={{  width: '140px', maxWidth: '200px', mb: '10px', height: '42px' }} inputProps={{ 'aria-label': 'Without label' }}>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>This Month</MenuItem>
                        <MenuItem value={20}>Jan</MenuItem>
                        <MenuItem value={30}>Feb</MenuItem>
                      </Select>
            </stack>

            <stack style={{ position: 'absolute', top: 75, left: 75, display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '8px' }}>
                <Typography variant="h4" style={{ fontWeight: 'bold', marginRight: '10px', fontSize: '13px' }}>
                    Overview
                </Typography>
                <FullscreenExitTwoToneIcon fontSize="small" />
            </stack>
            <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginLeft: '50px', display: 'flex', gap: '20px'}}>

                <stack>
                    <Card sx={{ width: 440, maxWidth: '500px', position: 'relative', cursor: 'pointer', mb: '20px', backgroundColor: isInvoiceClicked ? '#e0e0e0' : 'inherit' }} onClick={handleInvoiceClick}>
                        <CardContent>
                            <InsertDriveFileTwoToneIcon fontSize="small" />
                            <Typography gutterBottom variant="h5" sx={{ display: 'inline-block', marginLeft: '8px' }}>
                                Invoice
                            </Typography>
                            <ScreenShareOutlinedIcon sx={{ position: 'absolute', top: 20, right: 5 }} />
                        </CardContent>
                        <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-23px' }}>
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
                        <stack style={{ position: 'absolute', top: 314, left: 65, backgroundColor: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)' }}>
                            <stack>
                                <Typography variant="h4" style={{ fontWeight: 'bold', marginRight: '10px', fontSize: '13px' }}>
                                    Invoices
                                </Typography>
                            </stack>
                            <stack style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
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
                                {/* <stack style={{ position: 'relative' }}>
                                  <Button variant="contained" style={{ fontSize: '8px', height: '30px', padding: '3px 8px' }} onClick={handleOpen}>Add Expenses</Button>
                                  <ExpensesModal open={open} handleClose={handleClose} handleFormSubmit={handleFormSubmit} />
                                </stack> */}
                                    {/* {openTable && (
                                       <stack style={{ position: 'absolute', top: 85, left: 1, backgroundColor: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)' }}>
                                            <Box sx={{ border: "1px solid #ccc", borderRadius: 4, padding: 2 }}>
                                                <Box sx={{maxHeight: '300px', overflowY: 'auto',}}>
                                                    <Table>
                                                        <TableHead>
                                                            <TableRow>
                                                              <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '110px' }}>
                                                                  <Checkbox /> Invoice No.
                                                              </TableCell>
                                                              <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '110px' }}>Customer Name</TableCell>
                                                              <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '110px' }}>Factoring Company</TableCell>
                                                              <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '110px' }}>Due Date</TableCell>
                                                              <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '48px' }}>
                                                                  Invoice Total
                                                                  <stack style={{ display: 'flex', alignItems: 'center', marginTop: '1px' }}>
                                                                      <Box
                                                                          sx={{
                                                                          width: 10,height: 10,borderRadius: 1,display: 'inline-block',bgcolor: 'green','&:hover': {bgcolor: 'darkgreen',},
                                                                          }}
                                                                      />
                                                                          <Typography variant="body2" style={{ marginLeft: '5px' }}>Paid</Typography>
                                                                      <Box
                                                                        sx={{
                                                                          width: 10,height: 10,marginLeft: 1,borderRadius: 1,display: 'inline-block',bgcolor: 'red', '&:hover': {bgcolor: 'darkred', },
                                                                        }}
                                                                      />
                                                                          <Typography variant="body2" style={{ marginLeft: '5px' }}>Unpaid</Typography>
                                                                  </stack>
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
                                                            <TableCell>{row.factoringCompany}</TableCell>
                                                            <TableCell>{row.dueDate}</TableCell>
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
                                    )} */}
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
                        </stack>
                    )}
                </stack>



                <stack>
                    <Card sx={{ width: 380, position: 'relative', cursor: 'pointer', backgroundColor: isExpensesClicked ? '#e0e0e0' : 'inherit' }} onClick={handleExpensesClick} >
                        <CardContent>
                            <PriceChangeTwoToneIcon fontSize="small" />
                            <Typography gutterBottom variant="h5" sx={{ display: 'inline-block', marginLeft: '8px' }}>
                                Expenses
                            </Typography>
                            <ScreenShareOutlinedIcon sx={{ position: 'absolute', top: 20, right: 5 }} />
                        </CardContent>
                        <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-23px' }}>
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
                        <stack style={{ position: 'absolute', top: 314, left: 65, backgroundColor: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)'}}>
                            <stack>
                                <Typography variant="h4" style={{ fontWeight: 'bold', marginRight: '10px', fontSize: '13px' }}>
                                    Expenses
                                </Typography>
                            </stack>
                            <stack style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
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
                                //   onClick={handleButtonClick1}
                                >
                                  All
                                </Button>
                                {/* <TableContent openTable1={openTable1} handleCloseTable1={handleCloseTable1} /> */}
                                </stack>
                                {/* {openTable && (
                                    <stack style={{ position: 'absolute', top: 85, left: 1, backgroundColor: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)' }}>
                                        <Box sx={{ border: "1px solid #ccc", borderRadius: 4, padding: 2 }}>
                                            <Box sx={{maxHeight: '300px', overflowY: 'auto',}}>
                                                <Table>
                                                  <TableHead>
                                                    <TableRow>
                                                      <TableCell style={{ whiteSpace: 'nowrap', paddingRight: '94px' }}>
                                                        <stack style={{ display: 'flex', alignItems: 'center' }}>
                                                          <Checkbox />
                                                          <Typography style={{ fontWeight: 'bold', marginLeft: '5px' }}>Receipt No.</Typography>
                                                        </stack>
                                                      </TableCell>
                                                      <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '97px' }}>Merchant</TableCell>
                                                      <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '72px' }}>Stop Location</TableCell>
                                                      <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '94px' }}>Date</TableCell>
                                                      <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '94px' }}>Paid By</TableCell>
                                                      <TableCell style={{ fontWeight: 'bold', whiteSpace: 'nowrap', paddingRight: '28px' }}>
                                                        Total Amount
                                                        <stack style={{ display: 'flex', alignItems: 'center', marginTop: '1px' }}>
                                                          <Box
                                                            sx={{ width: 10,height: 10,borderRadius: 1,display: 'inline-block',bgcolor: 'green','&:hover': {bgcolor: 'darkgreen',},
                                                            }}
                                                          />
                                                          <Typography variant="body2" style={{ marginLeft: '5px' }}>Approved</Typography>
                                                          <Box
                                                            sx={{ width: 10,height: 10,marginLeft: 1,borderRadius: 1,display: 'inline-block',bgcolor: 'red','&:hover': {bgcolor: 'darkred',},
                                                            }}
                                                          />
                                                          <Typography variant="body2" style={{ marginLeft: '5px' }}>Declined</Typography>
                                                        </stack>
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
                                            <Button variant="outlined" onClick={handleCloseTable}>
                                              Close Table
                                            </Button>
                                        </Box>
                                    </stack>
                                )} */}
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
                        </stack>
                    )}
                </stack>

                
                <stack>
                    <Card sx={{ width: 320, position: 'relative', cursor: 'pointer', backgroundColor: isDriverPayClicked ? '#e0e0e0' : 'inherit' }} onClick={handleDriverPayClick}>
                    	<CardContent>
                    		<Person2TwoToneIcon fontSize="small" />
                    		<Typography gutterBottom variant="h5" sx={{ display: 'inline-block', marginLeft: '8px' }}>
                    			Driver Pay
                    		</Typography>
                    		<ScreenShareOutlinedIcon sx={{ position: 'absolute', top: 20, right: 5 }} />
                    	</CardContent>
                    	<CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-23px' }}>
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
                        <stack style={{ position: 'absolute', top: 314, left: 65, backgroundColor: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)'}}>
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
                        </stack>
                    )}
                </stack>
            </Box>
        </Box>
    );
}
