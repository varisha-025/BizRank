import React from 'react'
import { Box} from '@mui/system'
import { AppBar, List, ListItem, ListItemAvatar, Avatar, ListItemText  } from '@mui/material'
import Rating from '@mui/material/Rating';
import { Work } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
const Review = () => {
    return (
        <>
            <Box style={{background:"#393939", padding:"10px", borderRadius:"15px"}} >
                <List style={{marginLeft:"-1px"}} sx={{ width: '100%', maxWidth: 360, background:"transparent" }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AccountCircle />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="John Doe" secondary="Jan 9, 2014" />
                </ListItem>
            </List>
        <Box style={{marginBottom:"1rem"}} >
        <Box> <Rating/></Box>
        <Box> Nice Product</Box>
        </Box>
            <Box>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere commodi molestiae, unde rerum aperiam nesciunt doloribus ut quia magnam iure tempore nemo atque reiciendis at beatae perferendis necessitatibus? Suscipit?
            </p>
            </Box>
            
        </Box>
    </>
  )
}

export default Review