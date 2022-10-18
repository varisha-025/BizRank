import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { AppBar, Toolbar } from '@mui/material';

export default function BasicRating() {
    const [value, setValue] = React.useState(2);

    return (
    <>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <AppBar style={{ background: "#1e1e1e", boxShadow: "none" }} position="static">
                    <Toolbar style={{ background: "#1e1e1e", boxShadow: "none", margin: "0" }}  >
                        <span className='ratetext' style={{marginRight:"10px"}} >3.2</span>  
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}

                            style={{marginRight:"10px"}}
                        /> <span style={{marginRight:"10px"}} className='ratetext'>97 reviews</span>
                    </Toolbar>                                    
                </AppBar>
            </Box>

                </>
                );
}
