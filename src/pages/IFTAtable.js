import React, { useState } from 'react';
import {Box, Button, Checkbox, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

export const tableData2 = [
    {
        jurisdiction: "AZ",
        fuelType: "ULSD",
        totalMiles: "145",
        taxableMiles: "158",
        taxpaidGal: "$ 123  ",
    },
    {
        jurisdiction: "CA",
        fuelType: "ULSD",
        totalMiles: "145",
        taxableMiles: "158",
        taxpaidGal: "$ 123  ",
    },
    {
        jurisdiction: "IL",
        fuelType: "ULSD",
        totalMiles: "145",
        taxableMiles: "158",
        taxpaidGal: "$ 123  ",
    },
    {
        jurisdiction: "IN",
        fuelType: "ULSD",
        totalMiles: "145",
        taxableMiles: "158",
        taxpaidGal: "$ 123  ",
    },
    {
        jurisdiction: "IU",
        fuelType: "ULSD",
        totalMiles: "145",
        taxableMiles: "158",
        taxpaidGal: "$ 123  ",
    },
    {
        jurisdiction: "MZ",
        fuelType: "ULSD",
        totalMiles: "145",
        taxableMiles: "158",
        taxpaidGal: "$ 123  ",
    },
    {
        jurisdiction: "AW",
        fuelType: "ULSD",
        totalMiles: "145",
        taxableMiles: "158",
        taxpaidGal: "$ 123  ",
    },
    {
        jurisdiction: "TY",
        fuelType: "ULSD",
        totalMiles: "145",
        taxableMiles: "158",
        taxpaidGal: "$ 123  ",
    },
    {
        jurisdiction: "OP",
        fuelType: "ULSD",
        totalMiles: "145",
        taxableMiles: "158",
        taxpaidGal: "$ 123  ",
    },
    {
        jurisdiction: "MR",
        fuelType: "ULSD",
        totalMiles: "145",
        taxableMiles: "158",
        taxpaidGal: "$ 123  ",
    },
    {
        jurisdiction: "SW",
        fuelType: "ULSD",
        totalMiles: "145",
        taxableMiles: "158",
        taxpaidGal: "$ 123  ",
    },
    {
        jurisdiction: "HG",
        fuelType: "ULSD",
        totalMiles: "145",
        taxableMiles: "158",
        taxpaidGal: "$ 123  ",
    },
    {
        jurisdiction: "BN",
        fuelType: "ULSD",
        totalMiles: "145",
        taxableMiles: "158",
        taxpaidGal: "$ 123  ",
    },
    {
        jurisdiction: "KL",
        fuelType: "ULSD",
        totalMiles: "145",
        taxableMiles: "158",
        taxpaidGal: "$ 123  ",
    },
]

const IFTAtable = () => {
    const [openTablea, setOpenTabla] = useState(true);
  
    const handleCloseTabla = () => {
      setOpenTabla(false);
    };

    return(
        <>
        <Box>
            {openTablea &&(
                <div className="Main-table-container">
                    <Box className="Table-box-container">
                        <Box className="Table-subBox-container">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="Table-header1-container">
                                            <Checkbox/>Jurisdiction
                                        </TableCell>
                                        <TableCell className="Table-header-container">Fuel Type</TableCell>
                                        <TableCell className="Table-header-container">Total Miles</TableCell>
                                        <TableCell className="Table-header-container">Taxable Miles</TableCell>
                                        <TableCell className="Table-header-container">Tax Paid Gal</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableData2.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="Table-data1-container">
                                                <Checkbox />
                                                {row.jurisdiction}
                                            </TableCell>
                                            <TableCell className="Table-data2-container">{row.fuelType}</TableCell>
                                            <TableCell className="Table-data-container">{row.totalMiles}</TableCell>
                                            <TableCell className="Table-data-container">{row.taxableMiles}</TableCell>
                                            <TableCell className="Table-data-container">{row.taxpaidGal}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                        <Button variant="outlined" onClick={handleCloseTabla}>
                            Close Table
                        </Button>
                    </Box>
                </div>
            )}
        </Box>
        </>
    )
};
export default IFTAtable;