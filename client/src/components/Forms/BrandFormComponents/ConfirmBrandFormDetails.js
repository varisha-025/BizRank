import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material/';
import Button from '@mui/material/Button';


function ConfirmSellerFormDetails({ formData, setFormData, page }) {
    async function registerSeller(sellerDetails) {
        console.log(sellerDetails, "from jhi func")
        const response = await fetch('http://localhost:1337/api/auth/brandRegister', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:
                JSON.stringify(sellerDetails)
            ,
        })
    
        const data = await response.json()
        console.log(data.status)
    
        if (data.status === 'ok') {
            console.log("Seller added", data.seller)
            // navigate("/sellerLogin")
        }
        else {
            console.log("Some error ocurred", data.error)
        }
    }

    const { name, email, phoneNumber, password, dob, gender, state, city, pincode, brandName, brandDesc, brandWebsite, instagramHandleValue, youtubeChannelValue, facebookHandleValue, paymentOptions, deliveryTime, productCategories, brandContactEmail, brandContactNumber } = formData
    console.log(formData)
    const selllerDetails = { name: name, email: email, password: password, phoneNumber: phoneNumber, dob: dob, gender: gender, address: { state: state, city: city, pincode: pincode }, brandName: brandName, brandDesc: brandDesc, brandWebsite: brandWebsite, socialMediaHandles: { instagram: instagramHandleValue, youtubeChannel: youtubeChannelValue, facebook: facebookHandleValue }, paymentOptions: paymentOptions, deliveryTime: deliveryTime, productCategories: productCategories, brandContactEmail: brandContactEmail, brandContactNumber: brandContactNumber }
    return (
        <section className="h-screen">
            <div className="flex flex-col justify-center items-center  text-gray-800">
                hhiiiii
                 {/* <div className="flex justify-between items-center xl:w-3/5 lg:w-2/3 md:w-2/3 mb-12 md:mb-0">
                    <List>
                        <div>
                            <Typography variant='h5'> Personal Info</Typography>
                            <ListItem>
                                <ListItemText
                                    primary="Name"
                                    secondary={
                                        <React.Fragment>
                                            {name}
                                        </React.Fragment>
                                    }
                                />
                               
                            </ListItem>

                          <ListItem>
                                <ListItemText primary="Gender" secondary= {
                                        <React.Fragment>
                                            {gender}
                                        </React.Fragment>
                                    }/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Date of Birth" secondary={
                                        <React.Fragment>
                                            {dob}
                                        </React.Fragment>
                                    }/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Email" secondary={
                                        <React.Fragment>
                                            {email}
                                        </React.Fragment>
                                    }/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Phone Number" secondary={
                                        <React.Fragment>
                                            {phoneNumber}
                                        </React.Fragment>
                                    }/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="State" secondary={
                                        <React.Fragment>
                                            {state}
                                        </React.Fragment>
                                    }/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="City" secondary={
                                        <React.Fragment>
                                            {city}
                                        </React.Fragment>
                                    }/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Pincode" secondary={
                                        <React.Fragment>
                                            {pincode}
                                        </React.Fragment>
                                    }/>
                            </ListItem> 
                        </div>
                    </List>

                    <List>
                        <div>
                            <Typography variant='h5'> Business Info</Typography>
                            <ListItem>
                                    <ListItemText primary="Brand Logo" secondary={brandLogo} /> 
                                    hii
                                </ListItem>  
                            <ListItem>
                                <ListItemText primary="Brand Name" secondary={
                                        <React.Fragment>
                                            {brandName}
                                        </React.Fragment>
                                    }/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Brand Description" secondary={
                                        <React.Fragment>
                                            {brandDesc}
                                        </React.Fragment>
                                    } />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Brand Website" secondary={
                                        <React.Fragment>
                                            {brandWebsite}
                                        </React.Fragment>
                                    } />
                            </ListItem> 
                           
                           <ListItem>
                                <ListItemText primary="Expected Delivery Time" secondary={
                                        <React.Fragment>
                                            {deliveryTime}
                                        </React.Fragment>
                                    } />
                            </ListItem>

                            {brandContactEmail !== '' ?
                                <ListItem>
                                    <ListItemText primary="Brand Contact Email" secondary={
                                        <React.Fragment>
                                            {brandContactEmail}
                                        </React.Fragment>
                                    } />
                                </ListItem> : <></>
                            }
                            {brandContactNumber !== '' ?
                                <ListItem>
                                    <ListItemText primary="Brand Contact Number" secondary={
                                        <React.Fragment>
                                            {brandContactNumber}
                                        </React.Fragment>
                                    } />
                                </ListItem> : <></>
                            }
                            {instagramHandleValue !== '' ?
                                <ListItem>
                                    <ListItemText primary="Instagram Handle" secondary={
                                        <React.Fragment>
                                            {instagramHandleValue}
                                        </React.Fragment>
                                    } />
                                </ListItem> : <></>
                            }
                            {facebookHandleValue !== '' ?
                                <ListItem>
                                    <ListItemText primary="Facebook Handle" secondary={
                                        <React.Fragment>
                                            {facebookHandleValue}
                                        </React.Fragment>
                                    } />
                                </ListItem> : <></>
                            }
                            {youtubeChannelValue !== '' ?
                                <ListItem>
                                    <ListItemText primary="Youtube Channel" secondary={
                                        <React.Fragment>
                                            {youtubeChannelValue}
                                        </React.Fragment>
                                    } />
                                </ListItem> : <></>
                            } 
                        </div>
                    </List>

                </div>  */}
                

                <div className='mt-24 flex justify-center items-center'>

                    <Button hidden={page === 0}
                        onClick={() => {
                            setFormData({ ...formData, page: page - 1 })
                        }}>
                        Prev
                    </Button>

                    <Button
                        color="primary"
                        onClick={() => {
                            console.log(selllerDetails)
                            registerSeller(selllerDetails)
                        }}
                    >
                        Confirm & Submit
                    </Button>
                </div>

            </div>
        </section >
    );
}

export default ConfirmSellerFormDetails