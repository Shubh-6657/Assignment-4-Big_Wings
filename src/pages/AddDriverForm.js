import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function AddDriverForm() {
    const [formData, setFormData] = useState({
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

const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email) {
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
        // Reset form fields after successful submission
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    

    return (
        <div style={{ position: 'absolute', top: 70, left: '25%', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '600px' }}>
            <h2 style={{ textAlign: 'center' }}>Add Driver</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px', width: '100px'  }}>First Name*</Typography>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" style={{ width: '258px', height: '37px' }} required />
                    </div>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Last Name*</Typography>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" style={{ width: '258px', height: '37px' }} required />
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                <div>
    <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Date Of Birth</Typography>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
            label="Small picker" 
            slotProps={{ textField: { size: 'small' } }} 
            value={formData.date} 
            onChange={(newValue) => setFormData({ ...formData, date: newValue })} 
            renderInput={(props) => <input {...props} />} // Render the DatePicker inside an input element
        />
    </LocalizationProvider>
</div>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Email*</Typography>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" style={{ width: '258px', height: '37px' }} required />
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Phone No</Typography>
                        <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} placeholder="Phone No" style={{ width: '258px', height: '37px' }} required />
                    </div>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>SSN</Typography>
                        <input type="text" name="ssn" value={formData.ssn} onChange={handleChange} placeholder="SSN" style={{ width: '258px', height: '37px' }} />
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                <div>
    <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Country</Typography>
    <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        style={{ width: '258px', height: '37px', fontSize: '16px' }}
    >
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="Australia">Australia</option>
    </select>
</div>

                    <div style={{ display: 'flex', gap: '40px', marginBottom: '7px' }}>
                        <div>
                            <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Zipcode</Typography>
                            <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange}placeholder="Zipcode" style={{ width: '258px', height: '37px' }}/>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Status</Typography>
                        <input type="text" name="status" value={formData.status} onChange={handleChange} placeholder="Status" style={{ width: '258px', height: '37px' }}/>
                    </div>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>City</Typography>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" style={{ width: '258px', height: '37px' }}/>
                    </div>
                </div>
  
                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Address</Typography>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" style={{ width: '258px', height: '37px' }}/>
                    </div>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Image</Typography>
                        <input type="file" accept="image*"  name="image" value={formData.image} onChange={handleChange}  style={{ width: '258px', height: '37px',border: '1px solid #ccc', padding: '5px', borderRadius: '5px' }}/>
                    </div>
                </div>
  
                <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>License Case</Typography>
                        <input type="text"  name="licenseCase" value={formData.licenseCase} onChange={handleChange} placeholder="License Case" style={{ width: '258px', height: '37px' }}/>
                    </div>
                    <div style={{ marginLeft: '20px' }}>
    <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Years of Commercial Driving Experience</Typography>
    <select
        name="drivingExperience"
        value={formData.drivingExperience}
        onChange={handleChange}
        style={{ width: '258px', height: '37px', fontSize: '13px' }}
    >
        <option value="">Years of Commercial Driving Experience</option>
        <option value="1">1 year+</option>
        <option value="2">2 years+</option>
        <option value="7">7 years+</option>
    </select>
</div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'center',width: '553px' }}>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}

export default AddDriverForm;
