import React, { useState } from 'react';
import { Box, Typography, Button, Checkbox, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

export const tableData = [
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

  const TableContent = () => {
    const [openTable, setOpenTable] = useState(true);
    // const [openTable1, setOpenTable1] = useState(true);
  
    const handleCloseTable = () => {
      setOpenTable(false);
    };

    // const handleCloseTable1 = () => {
    //   setOpenTable1(false);
    // };
  
    return (
      <>
      <Box>
                                    {openTable && (
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
                                    )}
</Box>
{/* <Box>
{openTable1 && (
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
                                            <Button variant="outlined" onClick={handleCloseTable1}>
                                              Close Table
                                            </Button>
                                        </Box>
                                    </stack>
                                )}
                                </Box> */}
      </>
    );
  };
  
export default TableContent;
