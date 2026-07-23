import { Typography, Box } from '@mui/material';

function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to the admin dashboard!
      </Typography>
    </Box>
  );
}

export default Dashboard;