import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';

const SaleForm = ({ brandName }) => {
    return (
        <>
            <Container display="flex" justifyContent="center" alignItems="center" sx={{ my: "100px" }}>
                <Typography variant='h4' className='text-center pb-12'> Fill this form to announce your sale to your customers. </Typography>
                {/* <Typography variant='h6' className='text-center pb-12 pt-6 text-gray-500'> Your feedback is valuable to us.</Typography> */}
                <div className="mb-6">
                    <TextField
                        fullWidth
                        label="Brand Name"
                        required
                        type="text"> Brand Name
                    </TextField>

                </div>
                <div className='mb-6'>

                    <TextField
                        fullWidth
                        // defaultValue={brandContactEmail}
                        label="Your Contact Email"
                        required
                        type="email">Your Contact Email
                    </TextField>
                </div>
                <div className="mb-6">

                    <TextField
                    fullWidth
                        label="Sale name"
                        // value={brandDesc}
                        type="text"
                        required>Sale name
                    </TextField>
                </div>
                <div className="mb-6">
                    <TextField
                        fullWidth
                        // defaultValue={brandWebsite}
                        label="Discount upto %"
                        required
                        type="number">Discount upto %
                    </TextField>
                </div>

                <div className='mb-6'>
                    <TextField
                        fullWidth
                        // defaultValue={brandContactNumber}
                        label="Discount on which products"
                        required
                        type="text">Discount on which products
                    </TextField>
                </div>
                
                <div className='mb-6'>
                    <TextField
                        fullWidth
                        // defaultValue={instagramValue}
                        // label="Sale starts"

                        type="date">Sale starts
                    </TextField>
                </div>

                <div className='mb-6'>
                    <TextField
                        fullWidth
                        // defaultValue={facebookValue}
                        // label="Sale ends"

                        type="date">Sale ends
                    </TextField>
                </div>
                <div className='mb-6'>
                    <TextField
                        fullWidth
                        // defaultValue={facebookValue}
                        label="Free gifts available"

                        type="text">Free gifts available
                    </TextField>
                </div>
                
                <div className='mb-8 flex justify-center items-center'>
                    <Button variant='contained'>Submit</Button>
                </div>
            </Container>
        </>
    )
}

export default SaleForm