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

    <section className="w-full">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide  text-gray-900 text-xs font-bold mb-2" for="grid-first-name">
        Full Name
      </label>
      
      <TextField
                sx={{
                  backgroundColor:"#fff",
                }}
                fullWidth
                required
                label="Full Name"
                defaultValue={formData.name}
            First    onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
                type="text"> Full Name
      </TextField>      
      {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>   
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide  text-gray-900 text-xs font-bold mb-2" for="grid-last-name">
        Email
      </label>
      <TextField
                sx={{
                  backgroundColor:"#fff"
                }}
                fullWidth
                required
                label="Email Address"
                defaultValue={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                type="email"> Email address
      </TextField>
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
    
    </div>           
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide  text-gray-900 text-xs font-bold mb-2" for="grid-first-name">
        Password
      </label>
      
      <TextField
                sx={{
                  backgroundColor:"#fff"
                }}
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
      {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide  text-gray-900 text-xs font-bold mb-2" for="grid-last-name">
        Phone Number
      </label>
      <TextField
                sx={{
                  backgroundColor:"#fff"
                }}
                fullWidth
                defaultValue={formData.phoneNumber}
                label="Phone Number"
                required
                onChange={(e) => {
                  setFormData({ ...formData, phoneNumber: e.target.value });
                }}
                type="tel"> Phone Number
      </TextField>
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>      
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide  text-gray-900 text-xs font-bold mb-2" for="grid-first-name">
        Date of Birth
      </label>
      
      <TextField
                sx={{
                  backgroundColor:"#fff"
                }}
                fullWidth
                defaultValue={formData.dob}
                label="Date of Birth"
                required
                onChange={(e) => {
                  setFormData({ ...formData, dob: e.target.value });
                }}
                type="date"> Date of Birth
              </TextField>    
      {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide  text-gray-900 text-xs font-bold mb-2" for="grid-last-name">
        Gender
      </label>
      <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    sx={{
                      backgroundColor:"#fff"
                    }}
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
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>      
              
  </div>
  
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide  text-gray-900 text-xs font-bold mb-2" for="grid-city">
        State
      </label>
      <Autocomplete
                sx={{
                  backgroundColor:"#fff"
                }}
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
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide  text-gray-900 text-xs font-bold mb-2" for="grid-state">
        City
      </label>
      <div class="relative">
          <Autocomplete
                sx={{
                  backgroundColor:"#fff"
                }}
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
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide  text-gray-900 text-xs font-bold mb-2" for="grid-zip">
        Pincode
      </label>
      <TextField
                sx={{
                  backgroundColor:"#fff"
                }}
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
  </div>
  
            <div className='my-8'>
            <button className='shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              onClick={() => {
                setFormData({ ...formData, page: page + 1 })
              }}
            >
            Next
            </button>
          
            </div>
        
    </section>

  );
}


export default SellerPersonalDetailsForm;