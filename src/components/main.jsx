import * as React from 'react';
import { Typography, Paper, Grid } from '@mui/material';

const Main = ({ title }) => {
  return (
    <Grid item xs={12} md={8}>
      <Paper elevation={1} style={{ padding: '20px', backgroundColor: '#1e1e1e', color: '#ffffff' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet, nunc eu efficitur placerat, nunc turpis cursus quam, et ultrices metus turpis at nulla. Phasellus et sem nec nulla blandit tincidunt. Nulla facilisi. Cras tincidunt feugiat turpis, ut sodales felis auctor ut.
        </Typography>
        <Typography variant="body1" paragraph>
          Curabitur sit amet odio et odio gravida gravida. Proin sodales nisl ut turpis pharetra, nec efficitur mi consectetur. Nulla vel turpis nec metus dignissim ullamcorper sit amet nec magna. Donec in neque non justo consequat tempus non et nulla.
        </Typography>
        <Typography variant="body1" paragraph>
          Sed et fermentum lorem. Aenean sit amet vestibulum lorem, sed fringilla risus. Ut tempus, justo sed convallis gravida, eros eros sollicitudin orci, id ullamcorper lectus erat sit amet massa.
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Main;
