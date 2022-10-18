import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImgMediaCard from './ImageTab';
import Headers from './Headers';
import Description from './Description';
import Review from './Review';
import FolderList from './Contact';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='boxContainer' sx={{ width: '400px', height:"650px", background:"#1e1e1e", borderRadius:"15px",}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Headers/>

        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={"Overview"} {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
          <Tab label="Photos" {...a11yProps(2)} />
          <Tab label="Contact" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Description/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Review/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <ImgMediaCard/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <FolderList/>
      </TabPanel>
    </Box>
  );
}
