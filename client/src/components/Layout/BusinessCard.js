import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFacebook, faYoutube, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Container } from '@mui/material';
import BusinessPage from '../../pages/BusinessPage';

export default function BusinessCard({ brandName, brandDesc, brandLogo, productCategories, paymentOptions, deliveryTime, socialMediaHandles, brandContactEmail, brandContactNumber, brandWebsite }) {
    // let htmlContent ="";
    // console.log(paymentOptions)
    // console.log(deliveryTime)
    console.log(socialMediaHandles, brandName)
    return (

        <Card sx={{ my: "2rem", p: "1rem", maxWidth: 390, height: 400 }}>
            <CardActionArea>
                <div className='flex justify-between items-center p-2'>
                    {/* <CardMedia
                        component="img"
                        height="140"
                        image={brandLogo}
                        alt="brand Logo"
                    /> */}
                    <Typography gutterBottom variant="h6" component="div">
                        <Link href="#"> brand logo</Link>
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        <Link href={<BusinessPage brandName={brandName} paymentOptions={paymentOptions} deliveryTime={deliveryTime} socialMediaHandles={socialMediaHandles} productCategories={productCategories} brandDesc={brandDesc} brandContactEmail={brandContactEmail} brandContactNumber={brandContactNumber} brandLogo={brandLogo} brandWebsite={brandWebsite} />} underline="hover">
                            {brandName}
                        </Link>
                    </Typography>

                </div>
                {/* <Divider /> */}
                <CardContent sx={{ p: 2 }}>
                    <Typography variant="h7" color="text.secondary">
                        {brandDesc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <Divider /> */}
            <CardActions>
                <div className='flex justify-center items-center ml-20'>
                    <div className='mx-3'>
                        <FontAwesomeIcon icon={faPhone} style={{ "height": "29px", "width": "28px", "cursor": "pointer" }} />
                    </div>
                    <div className='mx-3'>
                        <Link href={brandWebsite} underline="none" target="_blank" rel="noopener"> <FontAwesomeIcon style={{ "height": "29px", "width": "28px", "cursor": "pointer" }} icon={faGlobe} /></Link>
                    </div>
                    <div className='mx-3'>
                        <Link href={brandContactEmail} underline="none" target="_blank" rel="noopener"> <FontAwesomeIcon style={{ "height": "29px", "width": "28px", "cursor": "pointer" }} icon={faEnvelope} /></Link>
                    </div>
                </div>
            </CardActions>
            {/* <Divider /> */}
            <CardContent>
                <Container>
                    <Typography variant='h6'>
                        What we sell:
                    </Typography>

                    {productCategories !== undefined && productCategories.length > 0 && (
                        <ul>
                            {productCategories.map((prod, index) => (
                                <li key={index}>{prod}</li>
                            ))}
                        </ul>
                    )}

                </Container>
            </CardContent>
            <Divider />
            <CardContent>
                <Typography variant='h6'>
                    Payment Options Available:
                    {paymentOptions !== undefined && paymentOptions.length > 0 && (
                        <ul>
                            {paymentOptions.forEach((opt, index) => (
                                <li key={index}>{opt}</li>
                            ))}
                        </ul>
                    )}
                </Typography>
                <Typography variant='h6'>
                    Expected Delivery Time: {deliveryTime}
                </Typography>
                <Typography variant='h6'>
                    Follow us on:

                    {/* {socialMediaHandles === undefined || socialMediaHandles.length === 0 ?
                        <></>
                        :
                        <ul>
                            {socialMediaHandles[0]["instagram"] !== "" ?
                                <li><Link href="#">hi
                                     <FontAwesomeIcon icon={faInstagram} />
                                       <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              className="svg-inline--fa fa-instagram w-3.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
                                </Link> </li>
                                : <></>
                            }
                            {socialMediaHandles[0]["youtubeChannel"] !== "" ?
                                <li><Link href="#">hi
                                    <FontAwesomeIcon icon={faYoutube} />
                                    
                                </Link> </li>
                                : <></>
                            }
                            {socialMediaHandles[0]["facebook"] !== "" ?
                                <li><Link href="#">hi
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              className="svg-inline--fa fa-facebook-f w-2.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 440 512"
            >
                                </Link> </li>
                                : <></>
                            }
                        </ul>
                    } */}
                </Typography>
            </CardContent>

            <CardActions>
                {/* Button for (creates a link) sharing this brand to others */}
                {/* <Button size="small" color="primary">
                   <Link>Share</Link> 
                </Button> */}
                <Button size="small" color="primary">
                    <Link href="#">Rate Us</Link>
                </Button>
            </CardActions>
        </Card>

    );
}
