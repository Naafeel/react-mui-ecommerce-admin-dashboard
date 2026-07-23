import { Typography, Box } from '@mui/material';

function Orders() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Orders Management
      </Typography>
      <Typography variant="body1">
        Order listing will go here.
      </Typography>
    </Box>
  );
}

export default Orders;