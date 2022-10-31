import React from 'react'
import instaSocialIcon from "../../assets/instagram.png";
import facebookSocialIcon from "../../assets/facebook.png";
import gmailSocialIcon from "../../assets/gmail.png";
import bizrankLogo from "../../assets/bizranklogo.png";
import '../../css/Footer.css';
import { Box } from '@mui/material';

const Footer = () => {
  return (

    <Box className="text-center text-white bg-[#000000]" sx={{py: "5rem"}}>
      <Box id="lab_social_icon_footer">
        


        <div className="container flex flex-col justify-center items-center ">
          <div className="pb-8 w-44">
            <a href="/"><img alt="bizranklogo" src={bizrankLogo}></img></a>
          </div>
          <div className="text-center center-block iconContainer">

            <a href="https://www.instagram.com" className="icon"><img alt="Instagram-logo" src={instaSocialIcon}/></a>
            <a href="https://www.facebook.com" className="icon"><img alt="Facebook-logo" src={facebookSocialIcon}/></a>
            <a href="mailto:varisharashid01@gmail.com" className="icon"><img alt="gmail-logo" src={gmailSocialIcon}/></a>
          </div>
        </div>
      </Box>
      <Box className="text-center text-white" sx={{mt:"2rem"}} >
        <span><a href='/' className='hover:text-white'>BizRank </a></span> © 2022 Copyright
      </Box>
    </Box>
  )
}

export default Footer