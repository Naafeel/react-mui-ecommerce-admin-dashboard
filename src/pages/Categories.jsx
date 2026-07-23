import { Typography, Box } from '@mui/material';

function Categories() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Categories Management
      </Typography>
      <Typography variant="body1">
        Category listing will go here.
      </Typography>
    </Box>
  );
}

export default Categories;