import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';

const RatingForm = ({ brandName }) => {
    return (
        <>
            <Container display="flex" justifyContent="center" alignItems="center" sx={{ my: "100px" }}>
                <Typography variant='h4' className='text-center'> Provide your feedback on your experience with {brandName}.</Typography>
                <Typography variant='h6' className='text-center pb-12 pt-6 text-gray-500'> Your feedback is valuable to us.</Typography>
                <div className="mb-6">
                    <TextField
                        fullWidth
                        label="Your Name"
                        required
                        type="text"> Your Name
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
                        label="Rate this brand out of 10"
                        // value={brandDesc}
                        type="number"
                        required> Overall Rating out of 10
                    </TextField>
                </div>
                <div className="mb-6">
                    <TextField
                        fullWidth
                        // defaultValue={brandWebsite}
                        label="Rate quality of products"
                        required
                        type="number">Rate quality of products
                    </TextField>
                </div>

                <div className='mb-6'>
                    <TextField
                        fullWidth
                        // defaultValue={brandContactNumber}
                        label="Rate delivery experience"
                        required
                        type="number">Rate delivery experience
                    </TextField>
                </div>
                
                <div className='mb-6'>
                    <TextField
                        fullWidth
                        // defaultValue={instagramValue}
                        label="Your Comments"

                        type="text">Your Comments
                    </TextField>
                </div>

                <div className='mb-6'>
                    <TextField
                        fullWidth
                        // defaultValue={facebookValue}
                        label="Any suggestions?"

                        type="text">Any suggestions?
                    </TextField>
                </div>
                
                <div className='mb-8 flex justify-center items-center'>
                    <Button variant='contained'>Submit</Button>
                </div>
            </Container>
        </>
    )
}

export default RatingForm