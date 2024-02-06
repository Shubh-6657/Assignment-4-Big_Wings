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
// import axios from 'axios';


export default function Drivers() {
  const [driverData, setDriverData] = useState([]);

  useEffect(() => {
    const staticData = [
      {
        "orderID": "#12345678",
        "productName": "Materials",
        "departureLocation": "64N Avenue, USA",
        "arrivalLocation": "13 Spring Hope lane, USA",
        "driverName": "Shubh Ag",
        "imageURL": "./pages/images/inn.jpg"
      },
    ];

    setDriverData(staticData);
  }, []);

  if (driverData.length === 0) {
    return <div>Loading...</div>;
  }
  

  if (!driverData || driverData.length === 0) {
    return <div>Loading...</div>;
  }


  return (
    <div style={{ margin: 70 }}>
      {/* Main Card Component */}
      {driverData.map((driver, index) => (
      <Card key={index} raised={true} sx={{ maxWidth: 410, borderRadius: '15px',marginBottom: '20px'  }}>
        <CardContent sx={{ display: 'flex', flexDirection:'column', alignItems: 'stretch' }}>
          <div style={{ flex: 1 }}>
            <Typography variant="h2" component="div" sx={{ textAlign: 'left', fontSize: '16px' }}>
            Order ID
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left' }}>
            {driver.driverName}
            </Typography>
          </div>

          <div style={{ flex: 1 }}>
            <Typography variant="h2" component="div" sx={{ textAlign: 'right', fontSize: '16px' }}>
              Name of product
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
              {driver.productName}
            </Typography>
          </div>
        </CardContent>

       {/* Mid Area */}
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

          {/* Second Date and Time Stack */}
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
                [`& .${timelineItemClasses.root}`]: {
                },
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

        {/* Bottom Area */}
        <CardActions>
          <img  src={img1}  alt=""  className="center-image"
            style={{  maxWidth: 300, display: 'block', width: '17%', height: '60%', border: '2px solid #000', borderRadius: '10px',}}/>

          {/* Text and Button */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', paddingLeft: 10 }}>
            <Typography variant="h6" component="div" sx={{ textAlign: 'right', fontSize: '16px', marginBottom: 1 }}>
              <strong>{driver.driverName}</strong>
            </Typography>
            <CardActions>
              <Button variant="contained" color="warning" size="small"
                sx={{ borderRadius: '12px', backgroundColor: 'green', color: 'black', height: '20px', marginLeft: '-10px', }}>
                Share
              </Button>
            </CardActions>
          </div>

          {/* Call and Message Icons */}
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
