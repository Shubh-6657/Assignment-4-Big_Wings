import React from 'react';
import { Modal, Box, Typography, Button, TextField, List, Divider, InputAdornment, Grid, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Select} from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';

const ExpensesModal = ({ open, handleClose, handleFormSubmit }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '37%',
    transform: 'translate(-50%, -50%)',
    width: 557,
    height: 579,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const style1 = {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'background.paper',
    borderColor: 'divider',
  };


  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
        <List sx={style1}>
        <Typography variant="h5" component="h2" style={{ textAlign: 'left', padding: 2, marginTop: -28, marginLeft: -15, fontSize: '18px' }}>
          Add New Expenses Details
        </Typography>
          <Divider component="li" style={{ paddingBottom:  0 ,  marginBottom: "10px" }} />
        </List>
        <Button style={{ fontSize: '11px', padding: '0px', marginTop: '-17px', marginLeft: '26.3rem' }}>
          Add More
          <AddIcon style={{ fontSize: 10 }} />
        </Button>

          <form onSubmit={handleFormSubmit} style={{marginTop: '-20px'}}>
          <Grid container spacing={2}>
              <Grid item xs={12} md={6} style={{ marginBottom: '3px',marginTop: '-5px' }}>
                  <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>Receipt No.:* </Typography>
                  <TextField type="text" sx={{ width: '14rem', "& .MuiInputBase-root": { height: '30px' } }} required />
              </Grid>
              <Grid item xs={12} md={6} style={{  marginBottom: '3px',marginTop: '-5px'}}>
                  <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>Category</Typography>
                      <Select sx={{ width: '14.8rem',height: '29px' }} inputProps={{ 'aria-label': 'Without label' }}>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
              </Grid>
              <Grid item xs={12} md={6} style={{ gap: '50px', marginBottom: '3px',marginTop: '-5px' }}>
                  <Typography variant="subtitle1" sx={{ fontSize: '12px', width: '120px' }}> Merchant Name.:*</Typography>
                      <TextField type="text" sx={{ width: '14rem', "& .MuiInputBase-root": { height: '30px' } }} required />
              </Grid>
              <Grid item xs={12} md={6} style={{ gap: '50px', marginBottom: '3px',marginTop: '-5px' }}>
                  <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>Stop Location.:*</Typography>
                      <TextField type="text" sx={{ width: '14.8rem', "& .MuiInputBase-root": { height: '30px' } }} required
                          InputProps={{
                              endAdornment: (
                                  <InputAdornment position="end">
                                      <FmdGoodIcon style={{ fontSize: 17 }} />
                                  </InputAdornment>
                              ),
                          }}
                      />
              </Grid>
              <Grid item xs={12} md={6} style={{ gap: '50px', marginBottom: '3px',marginTop: '-5px' }}>
                  <Typography variant="subtitle1" sx={{ fontSize: '12px', width: '120px' }}> Paid By.:*</Typography>
                      <TextField type="text" sx={{ width: '14rem', "& .MuiInputBase-root": { height: '40px' } }} required />
              </Grid>
              <Grid item xs={12} md={6} style={{ gap: '50px', marginBottom: '3px',marginTop: '-5px' }}>
                  <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>Date:*</Typography>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                              slotProps={{ textField: { size: 'small' } }}
                              sx={{ width: "98.8% " }}
                          />
                      </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={6} style={{ gap: '50px', marginBottom: '3px',marginTop: '-5px' }}>
                  <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>Load No.:*</Typography>
                  <Select sx={{ width: '14rem',height: '29px' }} inputProps={{ 'aria-label': 'Without label' }}>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
              </Grid>
              <Grid item xs={12} md={6} style={{ gap: '50px', marginBottom: '3px',marginTop: '-5px' }}>
                  <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>Asset No.:*</Typography>
                  <Select sx={{ width: '14.7rem',height: '29px' }} inputProps={{ 'aria-label': 'Without label' }}>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
              </Grid>
              <Grid item xs={12} md={6} style={{ gap: '50px', marginBottom: '3px',marginTop: '-5px' }}>
                  <Typography variant="subtitle1" sx={{ fontSize: '12px', width: '120px' }}> Total Amount.:*</Typography>
                      <TextField type="text" sx={{ width: '14rem', "& .MuiInputBase-root": { height: '30px' } }} required />
              </Grid>
              <Grid item xs={12} md={6} style={{ gap: '50px', marginBottom: '3px',marginTop: '-5px' }}>
                  <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>Upload Doc:</Typography>
                      <TextField type="text" sx={{ width: '14.7rem', "& .MuiInputBase-root": { height: '30px' } }} required
                          InputProps={{
                              endAdornment: (
                                  <InputAdornment position="end">
                                      <NoteAddIcon style={{ fontSize: 17 }} />
                                  </InputAdornment>
                              ),
                          }}
                      />
              </Grid>
              <Grid item xs={12} style={{ gap: '50px',marginTop: '-5px' }}>
                  <Typography variant="subtitle1" sx={{ fontSize: '12px', width: '110px' }}> Notes:</Typography>
                      <TextField type="text" sx={{ width: '30.5rem', "& .MuiInputBase-root": { height: '30px' } }} placeholder='Notes' required />
              </Grid>
              <Grid>
                  <TableContainer component={Box} marginTop={2} marginLeft={2} >
                  <Table style={{ width: '30.4rem', height: '20px' }}>
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ border: '1px solid black', padding:'0px' }}>S.No.</TableCell>
                        <TableCell style={{ border: '1px solid black', padding:'0px'  }}>Description</TableCell>
                        <TableCell style={{ border: '1px solid black', padding:'0px'  }}>Qty.</TableCell>
                        <TableCell style={{ border: '1px solid black', padding:'0px'  }}>Rate</TableCell>
                        <TableCell style={{ border: '1px solid black', padding:'0px'  }}>Total Amount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell style={{ border: '1px solid black', padding:'0px'  }}>01</TableCell>
                        <TableCell style={{ border: '1px solid black', padding:'0px'  }}>_</TableCell>
                        <TableCell style={{ border: '1px solid black', padding:'0px'  }}>_</TableCell>
                        <TableCell style={{ border: '1px solid black', padding:'0px'  }}>$ _</TableCell>
                        <TableCell style={{ border: '1px solid black', padding:'0px'  }}>$ _</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  </TableContainer>
            </Grid>
          </Grid> 
          <Grid style={{ paddingLeft: '22rem',paddingTop: '0.5rem'}}>
            <Button variant="contained" style={{marginRight: '6px', marginTop: '5px', padding: '6px',fontSize: '10px', backgroundColor: 'grey'}} onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained" style={{ marginTop: '5px', padding: '6px',fontSize: '11px' }} color="primary">Save</Button></Grid>
          </form>
        </Box>
    </Modal>
  );
};

export default ExpensesModal;
