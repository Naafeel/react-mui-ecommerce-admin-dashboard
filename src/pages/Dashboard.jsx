import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';

// Dummy data for now - we'll connect to API later
const stats = [
  {
    title: 'Total Revenue',
    value: '$12,450.00',
    icon: <AttachMoneyIcon sx={{ fontSize: 40 }} />,
    color: '#4caf50',
    bgColor: '#e8f5e9',
  },
  {
    title: 'Total Orders',
    value: '245',
    icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />,
    color: '#2196f3',
    bgColor: '#e3f2fd',
  },
  {
    title: 'Total Products',
    value: '89',
    icon: <InventoryIcon sx={{ fontSize: 40 }} />,
    color: '#ff9800',
    bgColor: '#fff3e0',
  },
  {
    title: 'Total Categories',
    value: '12',
    icon: <CategoryIcon sx={{ fontSize: 40 }} />,
    color: '#9c27b0',
    bgColor: '#f3e5f5',
  },
];

function Dashboard() {
  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Dashboard Overview
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome back, Admin! Here's what's happening with your store today.
        </Typography>
      </Box>

      {/* Statistics Cards */}
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: '100%',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1, fontWeight: 500 }}
                    >
                      {stat.title}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: stat.color,
                      }}
                    >
                      {stat.value}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: stat.bgColor,
                      borderRadius: 2,
                      p: 1.5,
                      color: stat.color,
                    }}
                  >
                    {stat.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recent Activity Section */}
      <Paper
        sx={{
          mt: 4,
          p: 3,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Recent Activity
        </Typography>
        <Typography variant="body2" color="text.secondary">
          No recent activity to display. Data will be loaded from the API soon.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Dashboard;