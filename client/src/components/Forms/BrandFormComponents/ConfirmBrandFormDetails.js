import React from 'react';
import { List, ListItem, ListItemText, Typography,Divider} from '@mui/material/';
import Button from '@mui/material/Button';


async function registerSeller(sellerDetails) {
    console.log(sellerDetails, "from jhi func")
    const response = await fetch('http://localhost:1337/api/auth/sellerRegister', {
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


function ConfirmSellerFormDetails({ formData, setFormData, page }) {
    const { name, email, phoneNumber, password, dob, gender, state, city, pincode, brandName, brandDesc, brandLogo, brandWebsite, instagramHandleValue, youtubeChannelValue, facebookHandleValue, paymentOptions, deliveryTime, productCategories, brandContactEmail, brandContactNumber } = formData
    console.log(formData)
    const selllerDetails = { name: name, email: email, password: password, phoneNumber: phoneNumber, dob: dob, gender: gender, address: { state: state, city: city, pincode: pincode }, brandName: brandName, brandDesc: brandDesc, brandWebsite: brandWebsite, socialMediaHandles: { instagram: instagramHandleValue, youtubeChannel: youtubeChannelValue, facebook: facebookHandleValue }, paymentOptions: paymentOptions, deliveryTime: deliveryTime, productCategories: productCategories, brandContactEmail: brandContactEmail, brandContactNumber: brandContactNumber }
    return (
        <section className="h-screen">
            <div className="flex flex-col gap-4 justify-between items-center  text-gray-800">
                    <List sx={{ width: '80%', bgcolor: 'background.paper' }}>
                        <div className='m-2'>
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
                            <Divider />

                          <ListItem>
                                <ListItemText primary="Gender" secondary= {
                                        <React.Fragment>
                                            {gender}
                                        </React.Fragment>
                                    }/>  
                            </ListItem>
                            <Divider />

                            <ListItem>
                                <ListItemText primary="Date of Birth" secondary={
                                        <React.Fragment>
                                            {dob}
                                        </React.Fragment>
                                    }/>
                            </ListItem>
                            <Divider />

                            <ListItem>
                                <ListItemText primary="Email" secondary={
                                        <React.Fragment>
                                            {email}
                                        </React.Fragment>
                                    }/>
                            </ListItem>
                            <Divider />

                            <ListItem>
                                <ListItemText primary="Phone Number" secondary={
                                        <React.Fragment>
                                            {phoneNumber}
                                        </React.Fragment>
                                    }/>
                            </ListItem>
                            <Divider />

                            <ListItem>
                                <ListItemText primary="State" secondary={
                                        <React.Fragment>
                                            {state}
                                        </React.Fragment>
                                    }/>
                            </ListItem>
                            <Divider />

                            <ListItem>
                                <ListItemText primary="City" secondary={
                                        <React.Fragment>
                                            {city}
                                        </React.Fragment>
                                    }/>
                            </ListItem>
                            <Divider />

                            <ListItem>
                                <ListItemText primary="Pincode" secondary={
                                        <React.Fragment>
                                            {pincode}
                                        </React.Fragment>
                                    }/>
                            </ListItem> 
                        </div>
                    </List>



                    <List sx={{ width: '80%', bgcolor: 'background.paper' }}>
                         <div className='m-2'>
                            <Typography variant='h5'> Business Info</Typography>                           
                            <ListItem>
                                 <ListItemText primary="Brand Logo" secondary={brandLogo} />
                            </ListItem> 
                            <Divider />

                            <ListItem>
                               <ListItemText primary="Brand Name" secondary={
                                        <React.Fragment>
                                            {brandName}
                                        </React.Fragment>
                                    }/>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText primary="Brand Description" secondary={
                                        <React.Fragment>
                                            {brandDesc}
                                        </React.Fragment>
                                    } />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText primary="Brand Website" secondary={
                                        <React.Fragment>
                                            {brandWebsite}
                                        </React.Fragment>
                                    } />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                    <ListItemText primary="Product Categories" secondary={productCategories} />
                            </ListItem>
                            <Divider />


                            <ListItem>
                                    <ListItemText primary="Payment Options available" secondary={paymentOptions} />
                                </ListItem>
                            <Divider />

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


                <div className='m-5 gap-4 flex justify-center items-center'>

                    <button hidden={page === 0} 
                        className='shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                        onClick={() => {
                            setFormData({ ...formData, page: page - 1 })
                        }}>
                        Prev
                    </button>

                    <button
                        className='shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                        onClick={() => {
                            console.log(selllerDetails)
                            // registerSeller(selllerDetails)
                        }}
                    >
                        Confirm & Submit
                    </button>
                </div>

            </div>
        </section >
    );
}

export default ConfirmSellerFormDetails










