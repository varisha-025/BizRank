import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

function Filters() {
  const [productCategoriesOptions, setProductCategoriesOptions] = useState([])
  const fetchProductCategories = () => {
    fetch("http://localhost:1337/api/brands/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        // product categories options coming from database
        setProductCategoriesOptions(data)
      })
  }

  useEffect(() => {
    fetchProductCategories()
  }, [])

  return (
    <div className='flex items-center justify-between'>
      <div className=" m-10" style={{ marginRight: '40%', marginTop: '60px' }}>
        <Autocomplete
          freeSolo
          style={{ width: 290 }}
          disableClearable
          options={productCategoriesOptions.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Brands By Products"
              InputProps={{
                ...params.InputProps,
                type: 'search',
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
          )}
        />
      </div>
      <div className='mx-10 flex justify-center items-center'>
        <div className='mx-2'>
          <Button variant="outlined">Current Sale</Button>
        </div>
        <div className='mx-2'>
          <Button variant="outlined">Upcoming Sale</Button>
        </div>
      </div>

    </div>
  )
}

export default Filters