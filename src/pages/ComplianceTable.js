import React, { useState } from 'react';
import { Box, Typography, Button, Checkbox, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Pix } from '@mui/icons-material';

export const tableData1 = [
    {
        driver:"Paul S",
        dutyStatus:"aa",
        currStatus:"10:30",
        vehicleNum: "123456",
        untilBreak: "00:00",
        driveRem: "00:00",
        shiftRem: "00:00",
        cycleRem: "00:00",
        cycleTom: "44",
        Violation: "00"
    },
    {
        driver:"Alex",
        dutyStatus:"aa",
        currStatus:"10:30",
        vehicleNum: "123456",
        untilBreak: "00:00",
        driveRem: "00:00",
        shiftRem: "00:00",
        cycleRem: "00:00",
        cycleTom: "44",
        Violation: "00"
    },
    {
        driver:"ATG",
        dutyStatus:"aa",
        currStatus:"10:30",
        vehicleNum: "123456",
        untilBreak: "00:00",
        driveRem: "00:00",
        shiftRem: "00:00",
        cycleRem: "00:00",
        cycleTom: "44",
        Violation: "00"
    },
    {
        driver:"Paul S",
        dutyStatus:"aa",
        currStatus:"10:30",
        vehicleNum: "123456",
        untilBreak: "00:00",
        driveRem: "00:00",
        shiftRem: "00:00",
        cycleRem: "00:00",
        cycleTom: "44",
        Violation: "00"
    },
    {
        driver:"Garren",
        dutyStatus:"aa",
        currStatus:"10:30",
        vehicleNum: "123456",
        untilBreak: "00:00",
        driveRem: "00:00",
        shiftRem: "00:00",
        cycleRem: "00:00",
        cycleTom: "44",
        Violation: "00"
    },
    {
        driver:"Davis",
        dutyStatus:"aa",
        currStatus:"10:30",
        vehicleNum: "123456",
        untilBreak: "00:00",
        driveRem: "00:00",
        shiftRem: "00:00",
        cycleRem: "00:00",
        cycleTom: "44",
        Violation: "00"
    },
    {
        driver:"Mario",
        dutyStatus:"aa",
        currStatus:"10:30",
        vehicleNum: "123456",
        untilBreak: "00:00",
        driveRem: "00:00",
        shiftRem: "00:00",
        cycleRem: "00:00",
        cycleTom: "44",
        Violation: "00"
    },
];

const ComplianceTable = () => {
    const [openTable, setOpenTabl] = useState(true);
  
    const handleCloseTabl = () => {
      setOpenTabl(false);
    };
  
    return (
        <>
        <Box>
            {openTable && (
                <div className="tableContainer1">
                    <Box className="tableBox1">
                        <Box className="tableContent1">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="tableHeaderCell1">
                                            <Checkbox /> Driver
                                        </TableCell>
                                        <TableCell className="tableHeaderCell1">Duty Status</TableCell>
                                        <TableCell className="tableHeaderCell1">Time in Current Status</TableCell>
                                        <TableCell className="tableHeaderCell1">Vehicle Number</TableCell>
                                        <TableCell className="tableHeaderCell1">Time Until Break</TableCell>
                                        <TableCell className="tableHeaderCell1">Drive Remaining</TableCell>
                                        <TableCell className="tableHeaderCell1">Shift Remaining</TableCell>
                                        <TableCell className="tableHeaderCell1">Cycle Remaining</TableCell>
                                        <TableCell className="tableHeaderCell1">
                                            Cycle Tomorrow
                                            <div className="inViolationStack">
                                                <Box className="violationBox" />
                                                <Typography variant="body2" className="violationTypography">In Violation</Typography>
                                            </div>
                                        </TableCell>
                                        <TableCell className="tableHeaderCell1">
                                            Violation
                                            <div className="inViolationStack">
                                                <Box className="nearingViolationBox" />
                                                <Typography variant="body2" className="nearingViolationTypography">Nearing Violation</Typography>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableData1.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="tableHeaderCell1">
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
                        <Button variant="outlined" onClick={handleCloseTabl}>
                            Close Table
                        </Button>
                    </Box>
                </div>
            )}
        </Box>
      </>
    );
};
  
export default ComplianceTable;
