import React, { useState } from 'react';
import SellerBusinessDetailsForm from './BrandDetailsForm';
import SellorPersonalDetailsForm from './PersonalDetails';
import Confirm from './ConfirmBrandFormDetails';
import Success from './Success';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

function SellerForm() {

  const [formData, setFormData] = useState({
    page: 0,
    name: '',
    gender: '',
    dob: new Date().toISOString().slice(0, 10),
    email: '',
    password: '',
    phoneNumber: '',
    state: '',
    city: '',
    pincode: '',
    brandLogo: null,
    brandName: '',
    brandDesc: '',
    brandWebsite: '',
    paymentOptions: [],
    productCategories: [],
    deliveryTime: '',
    brandContactEmail: '',
    brandContactNumber: '',
    instagramHandleValue: '',
    facebookHandleValue: '',
    youtubeChannelValue: '',
  });

  const FormTitles = ["Personal Info", "Business Info"];

  const PageDisplay = () => {
    // console.log(formData.page)
    if (formData.page === 0) {
      return <SellorPersonalDetailsForm formData={formData} setFormData={setFormData} page ={formData.page} />
    }
    else if (formData.page === 1) {
      return <SellerBusinessDetailsForm formData={formData} setFormData={setFormData} page ={formData.page}/>
    }
    else if (formData.page === 2) {
      return <Confirm formData={formData} setFormData={setFormData} page ={formData.page}/>
    }
    else if (formData.page === 3) {
      return <Success page ={formData.page}/>;
    }
    else
      (console.log('This is a multi-step form built with React.'))
  }

  return (
    <>
      <Container sx={{ py: 12 }}>

        <div className="form">
          <div className="progressbar" >

            <BorderLinearProgress  variant="determinate" value={formData.page === 0 ? 33.3 : formData.page === 1 ? 66.6 : 100} />
          </div>
          <div className="form-container text-center">
            <div className="header pt-10">
              <Typography variant='h4'> {FormTitles[formData.page]} </Typography>

            </div>
            <div className="body pt-10 text-center">{PageDisplay()}</div>
          </div>
        </div>
      </Container>
    </>
  );

}

export default SellerForm;