import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Email } from '@mui/icons-material';
import { LocationCity } from '@mui/icons-material';
import { Phone } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
export default function FolderList() {
  return (
    <>
    <List sx={{ width: '100%', maxWidth: 360, background:"transparent"}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationCity />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Address" secondary="Qureshi's Villa, Pune" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Email />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="xyz@gmail.com" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Phone />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone Number" secondary="987542002" />
      </ListItem>
    </List>
    <Box  style={{background:"#393939",marginTop:"1rem", padding:"10px", borderRadius:"15px"}}  >
            <h3>About</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere commodi moemo atque reiciendis at beatae perferendis necessitatibus? Suscipit?
            </p>
            </Box>   
    </>
    );
}
