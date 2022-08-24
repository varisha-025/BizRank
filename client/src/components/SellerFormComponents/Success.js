import React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { Typography } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function Success({page}
) {
    return (
      <MuiThemeProvider theme={theme}>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='md'
          >
            <AppBar position="static" title="Success" />
            <Typography variant='h4'>Thank You For Your Submission</Typography>
            <br/>
            <Typography variant='h5'>You will get an email soon with further instructions.</Typography>
  
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }


export default Success;