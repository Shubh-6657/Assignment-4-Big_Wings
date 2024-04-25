import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FullscreenExitTwoToneIcon from '@mui/icons-material/FullscreenExitTwoTone';
import InsertDriveFileTwoToneIcon from '@mui/icons-material/InsertDriveFileTwoTone';
import PriceChangeTwoToneIcon from '@mui/icons-material/PriceChangeTwoTone';
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import { Button, Avatar, Typography, Table, Box, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import InputAdornment from '@mui/material/InputAdornment';
import LogoutIcon from '@mui/icons-material/Logout';
import Checkbox from '@mui/material/Checkbox';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import AddIcon from '@mui/icons-material/Add';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

export default function Accounting() {
    const [isInvoiceClicked, setIsInvoiceClicked] = useState(false);
    const [isExpensesClicked, setIsExpensesClicked] = useState(false);
    const [isDriverPayClicked, setIsDriverPayClicked] = useState(false);
    const [openTable, setOpenTable] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleButtonClick = () => {
      setOpenTable(true);
    };
  
    const handleCloseTable = () => {
      setOpenTable(false);
    };

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
        // Your form submission logic here
      };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '38%',
        transform: 'translate(-50%, -50%)',
        width: 569.8,
        height: 579,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const style1 = {
        py: 0,
        width: '100%',
        maxWidth: 360,
        borderRadius: 2,
        border: '10px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      };
       
  const tableData = [
    // Your table data goes here
    {
      invoiceNo: "12345",
      customerName: "Shubh Agrahari",
      licenseNo: "ABCD1234",
      stopLocation: "Mumbai",
      totalAmount: "$80",
      loadNo: "XY7890",
      emptyMiles: "60 Miles",
      loadedMiles: "40 Miles",
      factoringCompany: "Factory A",
      grossRevenue: "$100",
      dueDate: "2024-04-30",
      invoice: "$750"
    },
    {
      invoiceNo: "56789",
      customerName: "Ansh Gupta",
      licenseNo: "ABCD1234",
      stopLocation: "Mumbai",
      totalAmount: "$80",
      loadNo: "XY7890",
      emptyMiles: "60 Miles",
      loadedMiles: "40 Miles",
      factoringCompany: "Factory B",
      grossRevenue: "$100",
      dueDate: "2024-05-15",
      invoice: "$750"
    },
    {
        invoiceNo: "01234",
        customerName: "Agrahari Shubh",
        licenseNo: "ABCD1234",
        stopLocation: "Mumbai",
        totalAmount: "$80",
        loadNo: "XY7890",
        emptyMiles: "60 Miles",
        loadedMiles: "40 Miles",
        factoringCompany: "Factory C",
        grossRevenue: "$100",
        dueDate: "2024-06-17",
        invoice: "$750"
      },
      {
        invoiceNo: "45678",
        customerName: "Agrahari Shubh",
        licenseNo: "ABCD1234",
        stopLocation: "Mumbai",
        totalAmount: "$80",
        loadNo: "XY7890",
        emptyMiles: "60 Miles",
        loadedMiles: "40 Miles",
        factoringCompany: "Factory D",
        grossRevenue: "$100",
        dueDate: "2024-05-25",
        invoice: "$750"
      },
      {
        invoiceNo: "89012",
        customerName: "Agrahari Shubh",
        licenseNo: "ABCD1234",
        stopLocation: "Mumbai",
        totalAmount: "$80",
        loadNo: "XY7890",
        emptyMiles: "60 Miles",
        loadedMiles: "40 Miles",
        factoringCompany: "Factory E",
        grossRevenue: "$100",
        dueDate: "2024-09-10",
        invoice: "$750"
      },
      {
        invoiceNo: "23456",
        customerName: "Agrahari Shubh",
        licenseNo: "ABCD1234",
        stopLocation: "Mumbai",
        totalAmount: "$80",
        loadNo: "XY7890",
        emptyMiles: "60 Miles",
        loadedMiles: "40 Miles",
        factoringCompany: "Factory F",
        grossRevenue: "$100",
        dueDate: "2024-10-16",
        invoice: "$750"
      },
      {
        invoiceNo: "67890",
        customerName: "Agrahari Shubh",
        licenseNo: "ABCD1234",
        stopLocation: "Mumbai",
        totalAmount: "$80",
        loadNo: "XY7890",
        emptyMiles: "60 Miles",
        loadedMiles: "40 Miles",
        factoringCompany: "Factory G",
        grossRevenue: "$100",
        dueDate: "2024-07-18",
        invoice: "$750"
      },
      {
        invoiceNo: "09876",
        customerName: "Agrahari Shubh",
        licenseNo: "ABCD1234",
        stopLocation: "Mumbai",
        totalAmount: "$80",
        loadNo: "XY7890",
        emptyMiles: "60 Miles",
        loadedMiles: "40 Miles",
        factoringCompany: "Factory H",
        grossRevenue: "$100",
        dueDate: "2024-08-12",
        invoice: "$750"
      },
      {
        invoiceNo: "65432",
        customerName: "Agrahari Shubh",
        licenseNo: "ABCD1234",
        stopLocation: "Mumbai",
        totalAmount: "$80",
        loadNo: "XY7890",
        emptyMiles: "60 Miles",
        loadedMiles: "40 Miles",
        factoringCompany: "Factory H",
        grossRevenue: "$100",
        dueDate: "2024-05-09",
        invoice: "$750"
      },
      {
        invoiceNo: "62109",
        customerName: "Agrahari Shubh",
        licenseNo: "ABCD1234",
        stopLocation: "Mumbai",
        totalAmount: "$80",
        loadNo: "XY7890",
        emptyMiles: "60 Miles",
        loadedMiles: "40 Miles",
        factoringCompany: "Factory I",
        grossRevenue: "$100",
        dueDate: "2024-07-21",
        invoice: "$750"
      },
      {
        invoiceNo: "69876",
        customerName: "Agrahari Shubh",
        licenseNo: "ABCD1234",
        stopLocation: "Mumbai",
        totalAmount: "$80",
        loadNo: "XY7890",
        emptyMiles: "60 Miles",
        loadedMiles: "40 Miles",
        factoringCompany: "Factory J",
        grossRevenue: "$100",
        dueDate: "2024-08-22",
        invoice: "$750"
      },
      {
        invoiceNo: "34621",
        customerName: "Agrahari Shubh",
        licenseNo: "ABCD1234",
        stopLocation: "Mumbai",
        totalAmount: "$80",
        loadNo: "XY7890",
        emptyMiles: "60 Miles",
        loadedMiles: "40 Miles",
        factoringCompany: "Factory K",
        grossRevenue: "$100",
        dueDate: "2024-08-13",
        invoice: "$750"
      },
    // Add more rows as needed
  ];

    return (
        <Box>
            <div style={{ position: 'absolute', top: 70, right: 27 }}>
                <select name="months" style={{ width: '140px', height: '42px', fontSize: '16px', textAlign: 'center' }}>
                    <option value="" style={{ textAlign: 'center' }}>This Month</option>
                    <option value="1" style={{ textAlign: 'center' }}>1 year+</option>
                    <option value="2" style={{ textAlign: 'center' }}>2 years+</option>
                    <option value="7" style={{ textAlign: 'center' }}>7 years+</option>
                </select>
            </div>

            <div style={{ position: 'absolute', top: 75, left: 75, display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '8px' }}>
                <Typography variant="h4" style={{ fontWeight: 'bold', marginRight: '10px', fontSize: '13px' }}>
                    Overview
                </Typography>
                <FullscreenExitTwoToneIcon fontSize="small" />
            </div>
            <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginLeft: '50px', display: 'flex', gap: '20px'}}>

                <div>
                    <Card sx={{ width: 440, position: 'relative', cursor: 'pointer', backgroundColor: isInvoiceClicked ? '#e0e0e0' : 'inherit' }} onClick={handleInvoiceClick}>
                        <CardContent>
                            <InsertDriveFileTwoToneIcon fontSize="small" />
                            <Typography gutterBottom variant="h5" sx={{ display: 'inline-block', marginLeft: '8px' }}>
                                Invoice
                            </Typography>
                            <ScreenShareOutlinedIcon sx={{ position: 'absolute', top: 20, right: 5 }} />
                        </CardContent>
                        <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-23px' }}>
	                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
	                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar aria-label="recipe" sx={{ width: 24, height: 24, backgroundColor: '#EF0561' }}>
                                        <Typography variant="body2" style={{ fontSize: '10px' }}>15</Typography>
                                    </Avatar>
                                        <Typography variant="body2" style={{ marginLeft: '4px', fontSize: '12px', color: '#EF0561' }}>
                                            Pending
                                        </Typography>
                                </div>
                                    <Typography variant="body2" style={{ fontSize: '20px', marginLeft: '-17px', marginTop: '8px', color: '#EF0561' }}>
                                        $ 350
                                    </Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar aria-label="recipe" sx={{ width: 24, height: 24, backgroundColor: '#47B6D0' }}>
                                        <Typography variant="body2" style={{ fontSize: '10px' }}>15</Typography>
                                    </Avatar>
                                        <Typography variant="body2" style={{ marginLeft: '4px', fontSize: '12px', color: '#47B6D0' }}>
                                            Invoice
                                        </Typography>
                                </div>
                                    <Typography variant="body2" style={{ fontSize: '20px', marginLeft: '-15px', marginTop: '8px', color: '#47B6D0' }}>
                                            $ 200
                                    </Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar aria-label="recipe" sx={{ width: 24, height: 24, backgroundColor: '#5DEBD7' }}>
                                        <Typography variant="body2" style={{ fontSize: '10px' }}>15</Typography>
                                    </Avatar>
                                        <Typography variant="body2" style={{ marginLeft: '4px', fontSize: '12px', color: '#5DEBD7' }}>
                                            Recived
                                        </Typography>
                                </div>
                                    <Typography variant="body2" style={{ fontSize: '20px', marginLeft: '-17px', marginTop: '8px', color: '#5DEBD7' }}>
                                        $ 570
                                    </Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar aria-label="recipe" sx={{ width: 24, height: 24, backgroundColor: '#8576FF' }}>
                                        <Typography variant="body2" style={{ fontSize: '10px' }}>15</Typography>
                                    </Avatar>
                                        <Typography variant="body2" style={{ marginLeft: '4px', fontSize: '12px', color: '#8576FF' }}>
                                            Not Recived
                                        </Typography>
                                </div>
                                    <Typography variant="body2" style={{ fontSize: '20px', marginLeft: '-37px', marginTop: '8px', color: '#8576FF' }}>
                                        $ 240
                                    </Typography>
                            </div>
                        </CardContent>
                    </Card>
                    {isInvoiceClicked && (
                        <div style={{ position: 'absolute', top: 300, left: 75, backgroundColor: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)' }}>
                            <div >
                                <Typography variant="h4" style={{ fontWeight: 'bold', marginRight: '10px', fontSize: '13px' }}>
                                    Invoices
                                </Typography>
                            </div>
                            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
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
                                    {/* Conditional rendering of table */}
                                    {openTable && (
                                       <div style={{ position: 'absolute', top: 85, left: 1, backgroundColor: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)' }}>
                                            <Box sx={{ border: "1px solid #ccc", borderRadius: 4, padding: 2 }}>
                                                {/* <Typography variant="h6" gutterBottom>
                                                    Pending Invoices
                                                </Typography> */}
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
                                                                          <Typography variant="body2" style={{ marginLeft: '5px' }}>Paid</Typography>
                                                                      <Box
                                                                        sx={{
                                                                          width: 10,
                                                                          height: 10,
                                                                          marginLeft: 1,
                                                                          borderRadius: 1,
                                                                          display: 'inline-block',
                                                                          bgcolor: 'red', // Set the color to red
                                                                          '&:hover': {
                                                                            bgcolor: 'darkred', // Darker shade of red on hover
                                                                          },
                                                                        }}
                                                                      />
                                                                          <Typography variant="body2" style={{ marginLeft: '5px' }}>Unpaid</Typography>
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
                                                            <TableCell>{row.factoringCompany}</TableCell>
                                                            <TableCell>{row.dueDate}</TableCell>
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
                                    <select  style={{ width: '70px', height: '25px', fontSize: '13px', cursor: 'pointer' }}>
                                        <option value="">By Date</option>
                                        <option value="1">1 year+</option>
                                        <option value="2">2 years+</option>
                                        <option value="7">7 years+</option>
                                    </select>
                                    <Button variant="contained" style={{ fontSize: '8px', height: '30px', padding: '3px 8px' }}>
                                        Send Invoice
                                    </Button>
                                <LogoutIcon sx={{ fontSize: 20, height: 20, cursor: 'pointer' }} />
                            </div>
                        </div>
                    )}
                </div>



                <div>
                    <Card sx={{ width: 380, position: 'relative', cursor: 'pointer', backgroundColor: isExpensesClicked ? '#e0e0e0' : 'inherit' }} onClick={handleExpensesClick} >
                        <CardContent>
                            <PriceChangeTwoToneIcon fontSize="small" />
                            <Typography gutterBottom variant="h5" sx={{ display: 'inline-block', marginLeft: '8px' }}>
                                Expenses
                            </Typography>
                            <ScreenShareOutlinedIcon sx={{ position: 'absolute', top: 20, right: 5 }} />
                        </CardContent>
                        <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-23px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar aria-label="recipe" sx={{ width: 24, height: 24, backgroundColor: '#EF0561' }}>
                                        <Typography variant="body2" style={{ fontSize: '10px' }}>15</Typography>
                                    </Avatar>
                                        <Typography variant="body2" style={{ marginLeft: '4px', fontSize: '12px', color: '#EF0561' }}>
                                            Declined
                                        </Typography>
                                </div>
                                    <Typography variant="body2" style={{ fontSize: '20px', marginLeft: '-17px', marginTop: '8px', color: '#EF0561' }}>
                                        $ 650
                                    </Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar aria-label="recipe" sx={{ width: 24, height: 24, backgroundColor: '#5DEBD7' }}>
                                        <Typography variant="body2" style={{ fontSize: '10px' }}>15</Typography>
                                    </Avatar>
                                        <Typography variant="body2" style={{ marginLeft: '4px', fontSize: '12px', color: '#5DEBD7' }}>
                                            Approved
                                        </Typography>
                                </div>
                                    <Typography variant="body2" style={{ fontSize: '20px', marginLeft: '-20px', marginTop: '8px', color: '#5DEBD7' }}>
                                        $ 300
                                    </Typography>
                            </div>
                        </CardContent>
                    </Card>
                    {isExpensesClicked && (
                        <div style={{ position: 'absolute', top: 300, left: 75, backgroundColor: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)' }}>
                            <div >
                                <Typography variant="h4" style={{ fontWeight: 'bold', marginRight: '10px', fontSize: '13px' }}>
                                    Expenses
                                </Typography>
                            </div>
                            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
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
                                <select  style={{ width: '70px', height: '25px', fontSize: '13px', cursor: 'pointer' }}>
                                    <option value="">By Date</option>
                                    <option value="1">1 year+</option>
                                    <option value="2">2 years+</option>
                                    <option value="7">7 years+</option>
                                </select>
                                <div style={{ position: 'relative' }}>
                                  <Button variant="contained" style={{ fontSize: '8px', height: '30px', padding: '3px 8px' }} onClick={handleOpen}>Add Expenses</Button>
                                    <Modal
                                      open={open}
                                      onClose={handleClose}
                                      aria-labelledby="modal-modal-title"
                                      aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <List sx={{style1}}>
                                              <h2 style={{ textAlign: 'left', padding: 0, marginTop: -28, marginLeft: -15, fontSize: '18px' }}>Add New Expenses Details</h2>
                                              <Divider  component="li" />
                                            </List>
                                            <Button style={{  fontSize: '11px', padding: '0px',marginTop: '-16px', marginLeft: '26.7rem'  }}
                                            >   Add More
                                                <AddIcon style={{ fontSize: 10 }} />
                                            </Button>
                                            <form onSubmit={handleFormSubmit}>
                                                <div style={{ display: 'flex', gap: '50px', marginBottom: '8px',marginTop: '-5px' }}>
                                                    <div>
                                                        <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>Receipt No.:* </Typography>
                                                        <TextField type="text" sx={{ width: '14rem', "& .MuiInputBase-root": { height: '30px' } }} required />
                                                    </div>
                                                    <div>
                                                        <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>Category</Typography>
                                                        <select style={{ width: '14.3rem', height: '30px', fontSize: '13px' }}>
                                                            <option value="">Fuel</option>
                                                            <option value="1">1 year+</option>
                                                            <option value="2">2 years+</option>
                                                            <option value="7">7 years+</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', gap: '53px', marginBottom: '8px' }}>
                                                    <div>
                                                        <Typography variant="subtitle1" sx={{ fontSize: '12px', width: '120px' }}> Merchant Name.:*</Typography>
                                                        <TextField type="text" sx={{ width: '14rem', "& .MuiInputBase-root": { height: '30px' } }} required />
                                                    </div>
                                                    <div>
                                                        <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>Stop Location.:*</Typography>
                                                        <TextField type="text" sx={{ width: '14.1rem', "& .MuiInputBase-root": { height: '30px' } }} required
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        <FmdGoodIcon style={{ fontSize: 17 }} />
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', gap: '53px', marginBottom: '8px' }}>
                                                    <div>
                                                        <Typography variant="subtitle1" sx={{ fontSize: '12px', width: '120px' }}> Paid By.:*</Typography>
                                                        <TextField type="text" sx={{ width: '14rem', "& .MuiInputBase-root": { height: '37px' } }} required />
                                                    </div>
                                                    <div>
                                                        <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>Date:*</Typography>
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DatePicker
                                                                slotProps={{ textField: { size: 'small' } }}
                                                                renderInput={(props) => <input {...props} />}
                                                            />
                                                        </LocalizationProvider>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', gap: '50px', marginBottom: '8px' }}>
                                                    <div>
                                                        <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>Load No.:*</Typography>
                                                        <select style={{ width: '14rem', height: '30px', fontSize: '13px' }}>
                                                            <option value=""></option>
                                                            <option value="1">1 year+</option>
                                                            <option value="2">2 years+</option>
                                                            <option value="7">7 years+</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>Asset No.:*</Typography>
                                                        <select style={{ width: '14.2rem', height: '30px', fontSize: '13px' }}>
                                                            <option value=""></option>
                                                            <option value="1">1 year+</option>
                                                            <option value="2">2 years+</option>
                                                            <option value="7">7 years+</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', gap: '49px', marginBottom: '8px' }}>
                                                    <div>
                                                        <Typography variant="subtitle1" sx={{ fontSize: '12px', width: '120px' }}> Total Amount.:*</Typography>
                                                        <TextField type="text" sx={{ width: '14rem', "& .MuiInputBase-root": { height: '30px' } }} required />
                                                    </div>
                                                    <div>
                                                        <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>Upload Doc:</Typography>
                                                        <TextField type="text" sx={{ width: '14.2rem', "& .MuiInputBase-root": { height: '30px' } }} required
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        <NoteAddIcon style={{ fontSize: 17 }} />
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', marginBottom: '1px' }}>
                                                    <div>
                                                        <Typography variant="subtitle1" sx={{ fontSize: '12px', width: '120px' }}> Notes:</Typography>
                                                        <TextField type="text" sx={{ width: '31.2rem', "& .MuiInputBase-root": { height: '30px' } }} placeholder='Notes' required />
                                                    </div>
                                                </div>
                                                <div style={{ marginTop: '13px', paddingTop: '10px' }}>
                                                    <table style={{ width: "100%"}}>
                                                        <tr style={{ border: "1px solid black" }}>
                                                          <th style={{ border: "1px solid black" }}>S.No.</th>
                                                          <th style={{ border: "1px solid black" }}>Description</th>
                                                          <th style={{ border: "1px solid black" }}>Qty.</th>
                                                          <th style={{ border: "1px solid black" }}>Rate</th>
                                                          <th style={{ border: "1px solid black" }}>Total Amount</th>
                                                        </tr>
                                                        <tr>
                                                          <td style={{ border: "1px solid black" }}>01</td>
                                                          <td style={{ border: "1px solid black" }}>_</td>
                                                          <td style={{ border: "1px solid black" }}>_</td>
                                                          <td style={{ border: "1px solid black" }}>$_</td>
                                                          <td style={{ border: "1px solid black" }}>$_</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </form>
                                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                                                <Button variant="contained" style={{ fontSize: '8px', height: '30px',  backgroundColor: 'grey', color: 'white' }}>Cancel</Button>
                                                <Button variant="contained" style={{ fontSize: '8px', height: '30px'}}>Save</Button>
                                            </div>
                                        </Box>
                                    </Modal>
                                </div>
                                <LogoutIcon sx={{ fontSize: 20, height: 20, cursor: 'pointer' }} />
                            </div>
                        </div>
                    )}
                </div>

                
                <div>
                    <Card sx={{ width: 320, position: 'relative', cursor: 'pointer', backgroundColor: isDriverPayClicked ? '#e0e0e0' : 'inherit' }} onClick={handleDriverPayClick}>
                    	<CardContent>
                    		<Person2TwoToneIcon fontSize="small" />
                    		<Typography gutterBottom variant="h5" sx={{ display: 'inline-block', marginLeft: '8px' }}>
                    			Driver Pay
                    		</Typography>
                    		<ScreenShareOutlinedIcon sx={{ position: 'absolute', top: 20, right: 5 }} />
                    	</CardContent>
                    	<CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-23px' }}>
                    	    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar aria-label="recipe" sx={{ width: 24, height: 24, backgroundColor: '#EF0561' }}>
                                        <Typography variant="body2" style={{ fontSize: '10px' }}>15</Typography>
                                    </Avatar>
                                        <Typography variant="body2" style={{ marginLeft: '4px', fontSize: '12px', color: '#EF0561' }}>
                                            Declined
                                        </Typography>
                                </div>
                                    <Typography variant="body2" style={{ fontSize: '20px', marginLeft: '-17px', marginTop: '8px', color: '#EF0561' }}>
                                        $ 650
                                    </Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar aria-label="recipe" sx={{ width: 24, height: 24, backgroundColor: '#5DEBD7' }}>
                                        <Typography variant="body2" style={{ fontSize: '10px' }}>15</Typography>
                                    </Avatar>
                                        <Typography variant="body2" style={{ marginLeft: '4px', fontSize: '12px', color: '#5DEBD7' }}>
                                            Paid
                                        </Typography>
                                </div>
                                    <Typography variant="body2" style={{ fontSize: '20px', marginLeft: '7px', marginTop: '8px', color: '#5DEBD7' }}>
                                        $ 300
                                    </Typography>
                            </div>
                        </CardContent>
                    </Card>
                    {isDriverPayClicked && (
                        <div style={{ position: 'absolute', top: 300, left: 75, backgroundColor: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)' }}>
                            <div >
                                <Typography variant="h4" style={{ fontWeight: 'bold', marginRight: '10px', fontSize: '13px' }}>
                                    Invoices
                                </Typography>
                            </div>
                            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
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
                                {/* Conditional rendering of table */}
                                {openTable && (
                                    <div style={{ position: 'absolute', top: 85, left: 1, backgroundColor: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)' }}>
                                        <Box sx={{ border: "1px solid #ccc", borderRadius: 4, padding: 2 }}>
                                          {/* <Typography variant="h6" gutterBottom>
                                            Paid
                                          </Typography> */}
                                            <Box sx={{maxHeight: '300px', overflowY: 'auto',}}>
                                                <Table>
                                                    <TableHead>
                                                        <TableRow>
                                                          <TableCell style={{ whiteSpace: 'nowrap', paddingRight: '14px' }}>
                                                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                  <Checkbox
                                                                       // Checkbox props go here
                                                                  />
                                                                  <Typography style={{ fontWeight: 'bold', marginLeft: '5px' }}>Driver Name</Typography>
                                                              </div>
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
                                                                  <Typography variant="body2" style={{ marginLeft: '5px' }}>Paid</Typography>
                                                                <Box
                                                                  sx={{
                                                                    width: 10,
                                                                    height: 10,
                                                                    marginLeft: 1,
                                                                    borderRadius: 1,
                                                                    display: 'inline-block',
                                                                    bgcolor: 'red', // Set the color to red
                                                                    '&:hover': {
                                                                      bgcolor: 'darkred', // Darker shade of red on hover
                                                                    },
                                                                  }}
                                                                />
                                                                  <Typography variant="body2" style={{ marginLeft: '5px' }}>Pending</Typography>
                                                              </div>
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
                                    </div>
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
                                <select  style={{ width: '70px', height: '25px', fontSize: '13px', cursor: 'pointer' }}>
                                    <option value="">By Date</option>
                                    <option value="1">1 year+</option>
                                    <option value="2">2 years+</option>
                                    <option value="7">7 years+</option>
                                </select>
                                <Button variant="contained" style={{ fontSize: '8px', height: '30px', padding: '3px 8px' }}>
                                    Unpay
                                </Button>       
                                <LogoutIcon sx={{ fontSize: 20, height: 20, cursor: 'pointer' }} />
                            </div>
                        </div>
                    )}
                </div>
            </Box>
        </Box>
    );
}
