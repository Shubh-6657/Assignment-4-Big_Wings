import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import {  useParams } from "react-router-dom"
import axios from 'axios';

function EditDriverForm(props) {
    const { id } = useParams()
    const [formData, setFormData] = useState(props.currentUser);
    console.log(id,"id");
    const getById = async (id) => {
        try {
          const response = await axios.get(`http://localhost:3001/drivers/${id}`);
          // Assuming the response data contains the driver information
          setFormData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    useEffect( () => {
        getById(id);
    }, [id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (!formData?.driverName || !formData?.lastName || !formData?.email) {
            alert('Please fill in all required fields.');
            return;
        }

        fetch('http://localhost:3001/drivers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Data sent successfully:', data);
            setFormData({
                id: '',
                firstName: '',
                lastName: '',
                date: '',
                email: '',
                phoneNo: '',
                ssn: '',
                country: '',
                zipcode: '',
                status: '',
                city: '',
                address: '',
                image: '',
                licenseCase: '',
                drivingExperience: ''
            });
        })
        .catch(error => {
            console.error('Error sending data:', error);
        });
    };

    return (
        <div style={{ position: 'absolute', top: 70, left: '25%', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '600px' }}>
            <h2 style={{ textAlign: 'center' }}>Edit Driver</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name*</label>
                <input type="text" name="driverName" value={formData?.driverName} onChange={handleInputChange} placeholder="First Name" style={{ width: '258px', height: '37px' }} required />
                
                <label>Last Name*</label>
                <input type="text" name="lastName" value={formData?.lastName} onChange={handleInputChange} placeholder="Last Name" style={{ width: '258px', height: '37px' }} required />

                <label>Date Of Birth</label>
                

                <label>Email*</label>
                <input type="text" name="email" value={formData?.email} onChange={handleInputChange} placeholder="Email" style={{ width: '258px', height: '37px' }} required />

               

                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default EditDriverForm;
