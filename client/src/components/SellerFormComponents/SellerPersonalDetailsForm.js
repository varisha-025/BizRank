import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Autocomplete } from '@mui/material';



function SellerPersonalDetailsForm({ formData, setFormData, page }) {

  const [stateOptions, setStateOptions] = useState([])
  const [cityOptions, setCityOptions] = useState([])


  const fetchCities = () => {
    fetch("http://localhost:1337/api/cities")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCityOptions(data)
      })
  }

  const handleGenderChange=(e)=>{
    setFormData({ ...formData, gender: e.target.value });
  }

  const fetchStates = () => {
    fetch("http://localhost:1337/api/states")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setStateOptions(data)
      })
  }

  useEffect(() => {
    fetchCities()
    fetchStates()
  }, [])

  const genderOptions = [
    "Male", "Female", "Others",
  ]

  return (

    <section className="h-screen px-16 mx-12">
      <div className="px-6 h-full text-gray-800">
        <div className="flex justify-center items-center flex-wrap h-full g-6">

          <div className="xl:ml-20 text-center xl:w-3/5 lg:w-2/3 md:w-2/3 mb-12 md:mb-0">

            <div className="mb-6">

              <TextField
                fullWidth
                required
                label="Full Name"
                defaultValue={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
                type="text"> Full Name
              </TextField>
            </div>
            <div className="mb-6">
              <TextField
                fullWidth
                required
                label="Email Address"
                defaultValue={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                type="email"> Email address
              </TextField>
            </div>
            <div className="mb-6">

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                autoComplete="current-password"
                defaultValue={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
              >  Password
              </TextField>
            </div>

            <div className="mb-6">

              <TextField
                fullWidth
                defaultValue={formData.phoneNumber}
                label="Phone Number"
                required
                onChange={(e) => {
                  setFormData({ ...formData, phoneNumber: e.target.value });
                }}
                type="tel"> Phone Number
              </TextField>
            </div>
            <div className="mb-6">
              <TextField
                fullWidth
                defaultValue={formData.dob}
                label="Date of Birth"
                required
                onChange={(e) => {
                  setFormData({ ...formData, dob: e.target.value });
                }}
                type="date"> Date of Birth
              </TextField>
            </div>
            <div className="mb-6">

              <div className="mb-6">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    required
                    label="Gender"
                    value={formData.gender}
                    onChange={handleGenderChange}
                    
                  >
                    {genderOptions.map((opt) => (
                      
                      <MenuItem
                        key={opt}
                        value={opt}
                      >
                        {opt}
                      </MenuItem>
                    ))}

                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="mb-6">
              <Autocomplete
                required
                value={formData.state}
                options={stateOptions}
                onChange={(e,val) => {
                  console.log(val.label,"state")
                  setFormData({ ...formData, state: val });
                }}
                renderInput={(params) => <TextField {...params} label="State" />}
                isOptionEqualToValue={(option, value) => option.id === value.id}
              >
              </Autocomplete>
            </div>
            <div className="mb-6">

              <Autocomplete
                required
                value={formData.city}
                options={cityOptions}
                onChange={(e,val) => {
                  console.log(val.label,"city")
                  setFormData({ ...formData, city: val });
                }}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => <TextField {...params} label="City" />}
              >
              </Autocomplete>
            </div>
            <div className="mb-6">

              <TextField
                fullWidth
                defaultValue={formData.pincode}
                label="Pincode"
                required
                onChange={(e) => {
                  setFormData({ ...formData, pincode: e.target.value });
                }}
                type="number"> Pincode
              </TextField>

            </div>
            <div className='my-8'>
            <Button
              color="primary"
              onClick={() => {
                setFormData({ ...formData, page: page + 1 })
              }}
            >
            Next
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}


export default SellerPersonalDetailsForm;