import React from 'react'
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <div>
      <header className='header-bg mt-20'>
        <div className='flex justify-center text-center p-10  mx-16 '>    
              <Typography
               variant="h2" 
               sx={{
                fontWeight:'bold',
               }}
              ><span className="header-color">Business profile </span> for<span className="header-color"> owners </span>operating their business from the comfort of their <span className="header-color">home.</span></Typography>          </div>
      </header>
    </div>
  )
}

export default Header