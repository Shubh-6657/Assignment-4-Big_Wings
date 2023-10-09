import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FacebookIcon from '@mui/icons-material/Facebook';


// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log(formData);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
      <h1>Please enter your Name,EmailID & Phone Number</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField sx={{"& .MuiOutlinedInput-root":{"& > fieldset": {borderRadius:50}}}}
              label="Name Surname"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField  sx={{
    borderRadius: 50
  }}
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button sx={{
    borderRadius: 50
  }} variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </Button>
          </Grid>
          <FacebookIcon/>
        </Grid>
      </form>
    </Paper>
  );
};

export default ContactForm;
