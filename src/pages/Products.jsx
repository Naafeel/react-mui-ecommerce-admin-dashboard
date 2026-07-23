import { Typography, Box } from '@mui/material';

function Products() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Products Management
      </Typography>
      <Typography variant="body1">
        Product listing will go here.
      </Typography>
    </Box>
  );
}

export default Products;