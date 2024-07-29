import React from 'react';
import { Box, Card, CardContent, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import BedIcon from '@mui/icons-material/Bed';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KitchenIcon from '@mui/icons-material/Kitchen';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import HomeIcon from '@mui/icons-material/Home';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
        },
    },
    shape: {
        borderRadius: 8,
    },
});

const ComparisonCalculator = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            {/* <Box sx={{ p: 3, backgroundColor: darkTheme.palette.background.default, color: darkTheme.palette.text.primary }}> */}
            <Typography variant="h3" gutterBottom align="center">
                <strong>Actual Cost VS Welcome Package</strong>
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ backgroundColor: darkTheme.palette.background.paper, color: darkTheme.palette.text.primary }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Individual Costs
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <LocalTaxiIcon sx={{ color: 'red' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Taxi fare from Calgary/Edmonton to Red Deer" secondary="$250" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <BedIcon sx={{ color: 'red' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Private room in Red Deer" secondary="$700" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ShoppingCartIcon sx={{ color: 'red' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Weekly grocery" secondary="$100" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <KitchenIcon sx={{ color: 'red' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Cutlery and silverware" secondary="$100" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <BedIcon sx={{ color: 'red' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Mattress" secondary="$300" />
                                </ListItem>
                            </List>
                            <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                                <AttachMoneyIcon color="primary" />
                                <Typography variant="h6" ml={1}>
                                    Total: $1450
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ backgroundColor: darkTheme.palette.background.paper, color: darkTheme.palette.text.primary }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Welcome Package
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircleIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary="All-inclusive package" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <LocalTaxiIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary="Taxi fare included" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <HomeIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary="Private room included" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ShoppingCartIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary="Weekly grocery included" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <KitchenIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary="Cutlery and silverware included" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <BedIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary="Mattress included" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircleIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary="Many more (Documnet help, shopping assistance, overall guidence)" />
                                </ListItem>
                            </List>
                            <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                                <AttachMoneyIcon color="primary" />
                                <Typography variant="h6" ml={1}>
                                    Total: $949
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
                <CompareArrowsIcon color="primary" />
                <Typography variant="h6" ml={1}>
                    Save $501 with the Welcome Package!
                </Typography>
            </Box>
            {/* </Box> */}
        </ThemeProvider>
    );
};

export default ComparisonCalculator;
