import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
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

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        fetch('http://localhost:3001/drivers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Data sent successfully:', data);
            reset();
        })
        .catch(error => {
            console.error('Error sending data:', error);
        });
    };

    return (
        <div style={{ position: 'absolute', top: 70, left: '25%', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '600px' }}>
            <h2 style={{ textAlign: 'center' }}>Add Driver</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px', width: '100px' }}>First Name*</Typography>
                        <input type="text" {...register("firstName", { required: true, pattern: /^[A-Z][a-z]*$/ })} placeholder="First Name" style={{ width: '258px', height: '37px', border: errors.firstName ? '1px solid red' : '1px solid #ccc' }} />
                        {errors.firstName && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>{errors.firstName.type === 'required' ? 'First Name is required' : 'First Name must start with a capital letter'}</Typography>}
                    </div>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Last Name*</Typography>
                        <input type="text" {...register("lastName", { required: true, pattern: /^[A-Z][a-z]*$/ })} placeholder="Last Name" style={{ width: '258px', height: '37px', border: errors.lastName ? '1px solid red' : '1px solid #ccc' }} />
                        {errors.lastName && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>{errors.lastName.type === 'required' ? 'Last Name is required' : 'Last Name must start with a capital letter'}</Typography>}
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
                        <input type="text" {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} placeholder="Email" style={{ width: '258px', height: '37px', border: errors.email ? '1px solid red' : '1px solid #ccc' }} />
                        {errors.email && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>Invalid Email Address</Typography>}
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Phone No</Typography>
                        <input
                            type="text"
                            {...register("phoneNo", { required: true, pattern: /^\d{10}$/ })}
                            placeholder="Phone No"
                            style={{ width: '258px', height: '37px', border: errors.phoneNo ? '1px solid red' : '1px solid #ccc' }}
                        />
                        {errors.phoneNo && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>Phone Number must be 10 digits</Typography>}
                    </div>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>SSN</Typography>
                        <input
                            type="text"
                            {...register("ssn", { pattern: /^[a-zA-Z0-9]*$/ })}
                            placeholder="SSN"
                            style={{ width: '258px', height: '37px', border: errors.ssn ? '1px solid red' : '1px solid #ccc' }}
                        />
                        {errors.ssn && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>SSN must be alphanumeric</Typography>}
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Country</Typography>
                        <select
                            {...register("country", { required: true })}
                            style={{ width: '258px', height: '37px', fontSize: '16px', border: errors.country ? '1px solid red' : '1px solid #ccc' }}
                        >
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="Australia">Australia</option>
                        </select>
                        {errors.country && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>Please select a country</Typography>}
                    </div>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Zipcode</Typography>
                        <input
                            type="text"
                            {...register("zipcode", { required: true, pattern: /^\d+$/ })}
                            placeholder="Zipcode"
                            style={{ width: '258px', height: '37px', border: errors.zipcode ? '1px solid red' : '1px solid #ccc' }}
                        />
                        {errors.zipcode && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>Zip Code must contain only numeric characters</Typography>}
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Status</Typography>
                        <input
                            type="text"
                            {...register("status", { required: true, pattern: /^[a-zA-Z\s]+$/ })}
                            placeholder="Status"
                            style={{ width: '258px', height: '37px', border: errors.status ? '1px solid red' : '1px solid #ccc' }}
                        />
                        {errors.status && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>Status must contain only alphabetic characters</Typography>}
                    </div>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>City</Typography>
                        <input
                            type="text"
                            {...register("city", { required: true, pattern: /^[a-zA-Z\s]+$/ })}
                            placeholder="City"
                            style={{ width: '258px', height: '37px', border: errors.city ? '1px solid red' : '1px solid #ccc' }}
                        />
                        {errors.city && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>City must be alphanumeric</Typography>}
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Address</Typography>
                        <input
                            type="text"
                            {...register("address", { required: true })} 
                            placeholder="Address"
                            style={{ width: '258px', height: '37px', border: errors.address ? '1px solid red' : '1px solid #ccc' }}
                        />
                        {errors.address && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>Address is required</Typography>}
                    </div>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Image</Typography>
                        <input
                            type="file"
                            {...register("image", { required: true })} 
                            accept="image/*"
                            style={{ width: '258px', height: '37px', padding: '5px', borderRadius: '5px', border: errors.image ? '1px solid red' : '1px solid #ccc' }}
                        />
                        {errors.image && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>Image is required</Typography>}
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>License Case</Typography>
                        <input
                            type="text"
                            {...register("licenseCase")}
                            placeholder="License Case"
                            style={{ width: '258px', height: '37px', border: errors.licenseCase ? '1px solid red' : '1px solid #ccc' }}
                        />
                        {errors.licenseCase && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>License Case is required</Typography>}
                    </div>
                    <div>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>Years of Commercial Driving Experience</Typography>
                        <select
                            {...register("drivingExperience")}
                            style={{ width: '258px', height: '37px', fontSize: '13px', border: errors.drivingExperience ? '1px solid red' : '1px solid #ccc' }}
                        >
                            <option value="">Years of Commercial Driving Experience</option>
                            <option value="1">1 year+</option>
                            <option value="2">2 years+</option>
                            <option value="7">7 years+</option>
                        </select>
                        {errors.drivingExperience && <Typography variant="subtitle2" color="error" sx={{ fontSize: '12px' }}>Years of Commercial Driving Experience is required</Typography>}
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '553px' }}>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}

export default AddDriverForm;
