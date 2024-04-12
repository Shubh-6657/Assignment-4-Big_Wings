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

    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!/^[A-Z][a-z]*$/.test(formData?.firstName)) {
            errors.firstName = 'First Name must start with a capital letter';
        }
        if (!/^[A-Z][a-z]*$/.test(formData?.lastName)) {
            errors.lastName = 'Last Name must start with a capital letter';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData?.email)) {
            errors.email = 'Invalid Email Address';
        }

        const maxFileSize = 5 * 1024 * 1024; 
        if (formData?.image?.size > maxFileSize) {
            errors.image = 'Image size exceeds 5 MB limit';
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData?.phoneNo)) {
            errors.phoneNo = 'Phone Number must be 10 digits';
        }

        const ssnRegex = /^[a-zA-Z0-9]*$/;
        if (!ssnRegex.test(formData?.ssn)) {
            errors.ssn = 'SSN must be alphanumeric';
        }

        const zipCodeRegex = /^\d+$/;
        if (!zipCodeRegex.test(formData?.zipcode)) {
            errors.zipcode = 'Zip Code must contain only numeric characters';
        }

        const cityRegex = /^[a-zA-Z\s]+$/;
        if (!cityRegex.test(formData?.city)) {
            errors.city = 'City must be alphanumeric';
        }

        const statusRegex = /^[a-zA-Z\s]+$/;
        if (!statusRegex.test(formData?.status)) {
            errors.status = 'Status must contain only alphabetic characters';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateForm()) {
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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileInputChange = event => {
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
                        <input type="text" name="firstName" value={formData?.firstName} onChange={handleInputChange} placeholder="First Name" style={{ width: '258px', height: '37px', border: formErrors.firstName ? '1px solid red' : '1px solid #ccc' }} required />
                        {formErrors.firstName && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>{formErrors.firstName}</Typography>}
                    </div>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Last Name*</Typography>
                        <input type="text" name="lastName" value={formData?.lastName} onChange={handleInputChange} placeholder="Last Name" style={{ width: '258px', height: '37px', border: formErrors.lastName ? '1px solid red' : '1px solid #ccc' }} required />
                        {formErrors.lastName && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>{formErrors.lastName}</Typography>}
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Date Of Birth</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker slotProps={{ textField: { size: 'small' } }} value={formData?.date} onChange={(newValue) => setFormData({ ...formData, date: newValue })} renderInput={(props) => <input {...props} />} />
                        </LocalizationProvider>
                    </div>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Email*</Typography>
                        <input type="text" name="email" value={formData?.email} onChange={handleInputChange} placeholder="Email" style={{ width: '258px', height: '37px', border: formErrors.email ? '1px solid red' : '1px solid #ccc' }} required />
                        {formErrors.email && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>{formErrors.email}</Typography>}
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Phone No</Typography>
                        <input type="text" name="phoneNo" value={formData?.phoneNo} onChange={handleInputChange} placeholder="Phone No" style={{ width: '258px', height: '37px', border: formErrors.phoneNo ? '1px solid red' : '1px solid #ccc' }} required />
                        {formErrors.phoneNo && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>{formErrors.phoneNo}</Typography>}
                    </div>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>SSN</Typography>
                        <input type="text" name="ssn" value={formData?.ssn} onChange={handleInputChange} placeholder="SSN" style={{ width: '258px', height: '37px', border: formErrors.ssn ? '1px solid red' : '1px solid #ccc' }} />
                        {formErrors.ssn && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>{formErrors.ssn}</Typography>}
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Country</Typography>
                        <select name="country" value={formData?.country} onChange={handleInputChange} style={{ width: '258px', height: '37px', fontSize: '16px' }}>
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="Australia">Australia</option>
                        </select>
                    </div>
                    <div style={{ display: 'flex', gap: '40px', marginBottom: '7px' }}>
                        <div>
                            <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Zipcode</Typography>
                            <input type="text" name="zipcode" value={formData?.zipcode} onChange={handleInputChange} placeholder="Zipcode" style={{ width: '258px', height: '37px', border: formErrors.zipcode ? '1px solid red' : '1px solid #ccc' }}/>
                            {formErrors.zipcode && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>{formErrors.zipcode}</Typography>}
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Status</Typography>
                        <input type="text" name="status" value={formData?.status} onChange={handleInputChange} placeholder="Status" style={{ width: '258px', height: '37px',border: formErrors.status ? '1px solid red' : '1px solid #ccc' }}/>
                        {formErrors.status && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>{formErrors.status}</Typography>}
                    </div>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>City</Typography>
                        <input type="text" name="city" value={formData?.city} onChange={handleInputChange} placeholder="City" style={{ width: '258px', height: '37px', border: formErrors.city ? '1px solid red' : '1px solid #ccc' }}/>
                        {formErrors.city && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>{formErrors.city}</Typography>}
                    </div>
                </div>
  
                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Address</Typography>
                        <input type="text" name="address" value={formData?.address} onChange={handleInputChange} placeholder="Address" style={{ width: '258px', height: '37px', border: formErrors.address ? '1px solid red' : '1px solid #ccc' }} required/>
                        {/* {formErrors.address && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>{formErrors.address}</Typography>} */}
                    </div>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Image</Typography>
                        <input type="file" accept="image*" name="image" onChange={handleFileInputChange} value={formData.image} style={{ width: '258px', height: '37px', padding: '5px', borderRadius: '5px', border: formErrors.image ? '1px solid red' : '1px solid #ccc' }}/>
                        {formErrors.image && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>{formErrors.image}</Typography>}
                    </div>
                </div>
  
                <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>License Case</Typography>
                        <input type="text"  name="licenseCase" value={formData?.licenseCase} onChange={handleInputChange} placeholder="License Case" style={{ width: '258px', height: '37px' }}/>
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Years of Commercial Driving Experience</Typography>
                        <select name="drivingExperience" value={formData?.drivingExperience} onChange={handleInputChange} style={{ width: '258px', height: '37px', fontSize: '13px' }}>
                            <option value="">Years of Commercial Driving Experience</option>
                            <option value="1">1 year+</option>
                            <option value="2">2 years+</option>
                            <option value="7">7 years+</option>
                        </select>
                    </div>
                </div>
                {Object.keys(formErrors).map((fieldName, index) => (
                    <Typography key={index} variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>
                        {formErrors[fieldName]}
                    </Typography>
                ))}
                <div style={{ display: 'flex', justifyContent: 'center',width: '553px' }}>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}
export default AddDriverForm;
