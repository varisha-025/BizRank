import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import ImageUpload from './ImageUpload';

function SellerBusinessDetailsForm({ formData, setFormData, page }) {
  const [productCategoriesOptions, setProductCategoriesOptions] = useState([])
  const deliveryTimeOptions = [
    "1-2 days",
    "2-3 days",
    "4-5 days",
    "5-6 days",
    "More than 7 days",
  ]
  function handlePaymentOptionsInput(event) {
    const {
      target: { value },
    } = event;
    setFormData({ ...formData, paymentOptions: typeof value === 'string' ? value.split(',') : value, })
  }

  function handleProductCategoriesInput(event) {
    const {
      target: { value },
    } = event;
    setFormData({ ...formData, productCategories: typeof value === 'string' ? value.split(',') : value, })

  }

  const fetchProductCategories = () => {
    fetch("http://localhost:1337/api/brands/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setProductCategoriesOptions(data)
      })
  }
  useEffect(() => {
    fetchProductCategories()
  }, [])

  return (

    <section className="h-screen px-16 mx-12">
      <div className="px-6 h-full text-gray-800">
        <div className="flex justify-center h-full g-6">

          <div className="xl:ml-20 xl:w-3/5 lg:w-2/3 md:w-2/3 mb-12 md:mb-0">
            {/* <div className="mb-2 flex">
              <div className='pr-5'>
                <Typography variant="h6" className='mb-3'> Brand Logo </Typography>
                <Button variant="contained" component="label">
                  Upload
                  <input hidden accept="image/*" type="file" onChange={onChangeLogo} />
                </Button>
              </div>
              <div className="previewBrandLogo" style={{ "height": "170px", "width": "200px" }}>
               <Image src={imgData} easing="ease-in-out" /> 
              </div>
            </div>  */}
                <ImageUpload/>
            <div className="mb-6">

              <TextField
                fullWidth
                defaultValue={formData.brandName}
                label="Brand Name"
                required
                onChange={(e) => {
                  setFormData({ ...formData, brandName: e.target.value });
                }}
                type="text"> Brand Name
              </TextField>

            </div>
            <div className="mb-6">

              <textarea
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Brand Description"
                value={formData.brandDesc}
                onChange={(e) => {
                  setFormData({ ...formData, brandDesc: e.target.value });
                }}
                type="text"
                required />

            </div>
            <div className="mb-6">

              <TextField
                fullWidth
                defaultValue={formData.brandWebsite}
                label="Brand Website"
                required
                onChange={(e) => {
                  setFormData({ ...formData, brandWebsite: e.target.value });
                }}
                type="text"> Brand Website
              </TextField>
            </div>
            <div className="mb-6">
              <FormControl sx={{ width: 530 }}>
                <InputLabel id="demo-simple-select-label">Expected Delivery Time</InputLabel>
                <Select
                  required
                  fullWidth
                  value={formData.deliveryTime}
                  label="Expected Delivery Time"
                  onChange={(e) => {
                    setFormData({ ...formData, deliveryTime: e.target.value });
                  }}
                >
                  {deliveryTimeOptions.map((opt, index) => (
                    <MenuItem
                      key={index}
                      value={opt}
                    >
                      {opt}
                    </MenuItem>
                  ))}

                </Select>
              </FormControl>

            </div>
            <div className="mb-6">
              <FormControl sx={{ width: 530 }}>
                <InputLabel id="demo-simple-select-label">Payment Options Available</InputLabel>
                <Select
                  required
                  multiple

                  value={formData.paymentOptions}
                  label="Payment Options Available"
                  onChange={handlePaymentOptionsInput}>

                  <MenuItem key="0" value="Cash on Delivery">Cash On Delivery</MenuItem>
                  <MenuItem key="1" value="UPI">UPI</MenuItem>
                  <MenuItem key="2" value="Net Banking">Net Banking</MenuItem>
                  <MenuItem key="3" value="Credit/Debit Cards">Credit/Debit Cards</MenuItem>
                  <MenuItem key="4" value="Paytm Wallet">Paytm Wallet</MenuItem>
                  <MenuItem key="5" value="Google pay">Google pay</MenuItem>
                </Select>
              </FormControl>

            </div>
            <div className="mb-6">
              <FormControl sx={{ width: 530 }}>
                <InputLabel id="demo-simple-select-label">Product Categories</InputLabel>
                <Select
                  multiple
                  required

                  value={formData.productCategories}
                  label="Product Categories"
                  onChange={handleProductCategoriesInput}>

                  {productCategoriesOptions.map((opt) => (
                    <MenuItem
                      key={opt._id}
                      value={opt.title}
                    >
                      {opt.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className='mb-6'>

              <TextField
                fullWidth
                defaultValue={formData.brandContactNumber}
                label="Brand Contact Number"
                required
                onChange={(e) => {
                  setFormData({ ...formData, brandContactNumber: e.target.value });
                }}
                type="tel">Brand Contact Number
              </TextField>
            </div>
            <div className='mb-6'>

              <TextField
                fullWidth
                defaultValue={formData.brandContactEmail}
                label="Brand Contact Email"

                onChange={(e) => {
                  setFormData({ ...formData, brandContactEmail: e.target.value });
                }}
                type="email">Brand Contact Email
              </TextField>
            </div>
            <div className='mb-6'>
              <TextField
                fullWidth
                defaultValue={formData.instagramValue}
                label="Instagram Handle"
                onChange={(e) => {
                  setFormData({ ...formData, instagramValue: e.target.value });
                }}
                type="text">Instagram Handle
              </TextField>
            </div>

            <div className='mb-6'>

              <TextField
                fullWidth
                defaultValue={formData.facebookValue}
                label="Facebook Handle"
                onChange={(e) => {
                  setFormData({ ...formData, facebookValue: e.target.value });
                }}
                type="text">Facebook Handle
              </TextField>
            </div>
            <div className='mb-6'>

              <TextField
                fullWidth
                defaultValue={formData.youtubeChannelValue}
                label="Youtube Channel"
                onChange={(e) => {
                  setFormData({ ...formData, youtubeChannelValue: e.target.value });
                }}
                type="text">Youtube Channel
              </TextField>
            </div>
            <div className='mb-8 flex justify-center items-center'>

              <Button hidden={page === 0}
                onClick={() => {
                  setFormData({ ...formData, page: page - 1 })
                }}>
                Prev
              </Button>

              <Button
                color="primary"
                onClick={() => {
                  if (page === 3) {
                    alert("FORM SUBMITTED");
                    console.log(formData);
                  } else {
                    setFormData({ ...formData, page: page + 1 })
                  }
                }}
              >
                {page === 2 ? "Confirm & Submit" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  );
}

export default SellerBusinessDetailsForm


