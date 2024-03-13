import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CallIcon from '@mui/icons-material/Call';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import img1 from './images/inn.jpg'; 
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TripOriginSharpIcon from '@mui/icons-material/TripOriginSharp';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';

function Drivers() {
  const [driverData, setDriverData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/drivers');
        setDriverData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);


  const handleDelete = async (driverId) => {
    try {
      await axios.delete(`http://localhost:3001/drivers/${driverId}`);
      setDriverData(driverData.filter(driver => driver.id !== driverId));
      console.log(`Driver with ID ${driverId} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting driver:', error);
    }
  };

  if (!driverData || driverData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ margin: 70, display: 'flex', flexWrap: 'wrap' }}>
      <Button variant="contained" component={Link} to="/add-driver" style={{ position: 'absolute', top: 70, right: 10 }}>
        Add Driver
      </Button>
      {driverData.map((driver, index) => (
        <Card key={index} raised={true} sx={{ maxWidth: 410, borderRadius: '15px', marginBottom: '20px', marginRight: '20px' }}>
          <CardContent sx={{ display: 'flex', flexDirection:'column', alignItems: 'stretch' }}>
            <CardActions style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '410px' }}>
                  <div>
                    <Typography variant="h2" component="div" sx={{ textAlign: 'left', fontSize: '16px' }}>
                      Order ID
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left' }}>
                      {driver.orderID}
                    </Typography>
                  </div>
                </div>
                <IconButton component={Link} to="/add-driver" aria-label="edit" sx={{ fontSize: '36px', padding: '3px', marginLeft: '55px' }} color="inherit">
                  <EditNoteIcon />
                </IconButton>
                <IconButton type="button" aria-label="delete" sx={{ fontSize: '36px', padding: '3px', marginLeft: '10px' }} color="inherit" onClick={() => handleDelete(driver.id)}>
                  <DeleteOutlineSharpIcon />
                </IconButton>
              </div>
            <div>
              <Typography variant="h2" component="div" sx={{ textAlign: 'right', fontSize: '16px' }}>
                Name of product
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                {driver.productName}
              </Typography>
            </div>
          </CardActions>
        </CardContent>
          <CardContent sx={{ bgcolor: '#E8E8E8', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="borderlessDateTimePicker" style={{ border: 'none', position: 'relative' }}>
              <Stack direction="row" spacing={3}>
                <Stack direction="column" spacing={1} sx={{ width: 115, position: 'relative', top: '-31px', right: '-7px' }}>
                  <Typography variant="body1" component="div" sx={{ fontSize: '11px' }}>
                    {new Date().toLocaleDateString()}
                  </Typography>
                </Stack>
                <Stack direction="column" spacing={1} sx={{ width: 70, position: 'relative', top: '-31px', right: '-7px' }}>
                  <Typography variant="body1" component="div" sx={{ fontSize: '11px' }}>
                    {new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={3}>
                <Stack direction="column" spacing={1} sx={{ width: 115, position: 'relative', top: '29px', right: '-7px' }}>
                  <Typography variant="body1" component="div" sx={{ fontSize: '11px' }}>
                    {new Date().toLocaleDateString()}
                  </Typography>
                </Stack>
                <Stack direction="column" spacing={1} sx={{ width: 70, position: 'relative', top: '29px', right: '-7px' }}>
                  <Typography variant="body1" component="div" sx={{ fontSize: '11px' }}>
                    {new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}
                  </Typography>
                </Stack>
              </Stack>
            </div>
            <Box sx={{ height: 110, display: 'inline-block', marginRight: '180px', marginTop: '-20px' }}>
              <Timeline
                sx={{
                  marginTop: '8px',
                  [`& .${timelineItemClasses.root}`]: {},
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TripOriginSharpIcon />
                    <TimelineConnector sx={{ height: '48px' }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ marginTop: '-6px', marginLeft:'-14px', fontSize:'14px',fontWeight: 'bold' }}>Departure</TimelineContent>
                  <Typography variant="body2" sx={{ marginTop: '21px', marginLeft:'-57px',fontSize:'10px', whiteSpace: 'nowrap' }}>
                    64N Avenue,USA 
                  </Typography>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TripOriginSharpIcon />
                  </TimelineSeparator>
                  <TimelineContent sx={{ marginTop: '-6px', marginLeft:'-14px', fontSize:'14px',fontWeight: 'bold' }}>Arrival</TimelineContent>
                  <Typography variant="body2" sx={{ marginTop: '21px', marginLeft:'-57px',fontSize:'10px', whiteSpace: 'nowrap' }}>
                    13Spring Hope lane,USA 
                  </Typography>
                </TimelineItem>
              </Timeline>
            </Box>
          </CardContent>
          <CardActions>
            <img  src={img1}  alt=""  className="center-image"
              style={{  maxWidth: 300, display: 'block', width: '17%', height: '60%', border: '2px solid #000', borderRadius: '10px',}}/>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', paddingLeft: 10 }}>
              <Typography variant="h6" component="div" sx={{ textAlign: 'right', fontSize: '12px', marginBottom: 1 }}>
                <strong>{driver.driverName}</strong>
              </Typography>
              <CardActions>
                <Button variant="contained" color="warning" size="small"
                  sx={{ borderRadius: '12px', backgroundColor: 'green', color: 'black', height: '18px', marginLeft: '-10px', }}>
                  Share
                </Button>
              </CardActions>
            </div>
            <IconButton type="button" aria-label="search" sx={{ fontSize: '36px', padding: '3px', marginLeft: '165px' }} color="inherit">
              <CallIcon />
            </IconButton>
            <IconButton type="button" aria-label="search" sx={{ fontSize: '36px', padding: '3px' }} color="inherit">
              <QuestionAnswerIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
export default Drivers;
