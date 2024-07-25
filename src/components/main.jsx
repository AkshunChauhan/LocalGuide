import * as React from 'react';
import { Typography, Paper, Grid, List, ListItem, ListItemText, Checkbox } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Main = ({ title }) => {
  return (
    <Grid item xs={12} md={8}>
      <Paper elevation={1} style={{ padding: '20px', backgroundColor: '#1e1e1e', color: '#ffffff' }}>
        <Typography variant="h4" component="h1" gutterBottom style={{ fontWeight: 'bold' }}>
          Welcome Package
        </Typography>
        <Typography variant="body1" paragraph>
          Our special package for international students arriving in Alberta covers everything you need to start your new life smoothly. This comprehensive package includes all essential services you need upon arrival, and it is customizable based on your specific requirements. If there is anything not mentioned here that you need, simply let us know, and we will add it to your package to ensure all your needs are met.
        </Typography>
        <Typography variant="h5" paragraph>
          The package includes:
        </Typography>
        <List>
          <ListItem>
            <Checkbox checked icon={<CheckCircleIcon />} />
            <ListItemText
              primary={<Typography variant="body1"><strong>Airport Pickup:</strong> Whether you're arriving from Edmonton or Calgary, we will be there to pick you up. No need to waste $250 on a cab.</Typography>}
            />
          </ListItem>
          <ListItem>
            <Checkbox checked icon={<CheckCircleIcon />} />
            <ListItemText
              primary={<Typography variant="body1"><strong>Accommodation:</strong> We find a place for you to stay, eliminating the hassle of searching for a new home in an unfamiliar location.</Typography>}
            />
          </ListItem>
          <ListItem>
            <Checkbox checked icon={<CheckCircleIcon />} />
            <ListItemText
              primary={<Typography variant="body1"><strong>Groceries:</strong> We provide one week of groceries to get you started.</Typography>}
            />
          </ListItem>
          <ListItem>
            <Checkbox checked icon={<CheckCircleIcon />} />
            <ListItemText
              primary={<Typography variant="body1"><strong>Essential Shopping:</strong> Assistance with getting your essential shopping done.</Typography>}
            />
          </ListItem>
          <ListItem>
            <Checkbox checked icon={<CheckCircleIcon />} />
            <ListItemText
              primary={<Typography variant="body1"><strong>Document Preparation:</strong> Help with preparing all necessary documents, such as getting a SIN number, setting up a new phone number, and opening a bank account.</Typography>}
            />
          </ListItem>
          <ListItem>
            <Checkbox checked icon={<CheckCircleIcon />} />
            <ListItemText
              primary={<Typography variant="body1"><strong>Orientation:</strong> Guidance on finding and navigating around town.</Typography>}
            />
          </ListItem>
          <ListItem>
            <Checkbox checked icon={<CheckCircleIcon />} />
            <ListItemText
              primary={<Typography variant="body1"><strong>Utensils and Cutlery:</strong> We provide all the required utensils and cutlery, so you don't have to carry everything in your bag. This allows you to fit essential items that are actually important.</Typography>}
            />
          </ListItem>
        </List>
        <Typography variant="body1" paragraph>
          If you need more information or have any questions, please feel free to message us on any of our social media accounts or fill out the registration form below. Our team will contact you and assist you in moving forward.
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Main;
