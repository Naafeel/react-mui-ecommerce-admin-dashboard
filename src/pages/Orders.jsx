import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Chip,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

// Dummy data - we'll connect to API later
const dummyOrders = [
  {
    id: 1001,
    customer: 'John Doe',
    email: 'john@example.com',
    items: 3,
    total: 249.97,
    status: 'Pending',
    date: '2026-07-20',
  },
  {
    id: 1002,
    customer: 'Jane Smith',
    email: 'jane@example.com',
    items: 1,
    total: 89.99,
    status: 'Processing',
    date: '2026-07-19',
  },
  {
    id: 1003,
    customer: 'Mike Johnson',
    email: 'mike@example.com',
    items: 5,
    total: 459.95,
    status: 'Shipped',
    date: '2026-07-18',
  },
  {
    id: 1004,
    customer: 'Sarah Williams',
    email: 'sarah@example.com',
    items: 2,
    total: 129.98,
    status: 'Delivered',
    date: '2026-07-17',
  },
  {
    id: 1005,
    customer: 'David Brown',
    email: 'david@example.com',
    items: 1,
    total: 49.99,
    status: 'Cancelled',
    date: '2026-07-16',
  },
  {
    id: 1006,
    customer: 'Emily Davis',
    email: 'emily@example.com',
    items: 4,
    total: 319.96,
    status: 'Pending',
    date: '2026-07-15',
  },
  {
    id: 1007,
    customer: 'Chris Wilson',
    email: 'chris@example.com',
    items: 2,
    total: 179.98,
    status: 'Processing',
    date: '2026-07-14',
  },
  {
    id: 1008,
    customer: 'Lisa Anderson',
    email: 'lisa@example.com',
    items: 3,
    total: 209.97,
    status: 'Delivered',
    date: '2026-07-13',
  },
  {
    id: 1009,
    customer: 'Tom Martinez',
    email: 'tom@example.com',
    items: 1,
    total: 149.99,
    status: 'Shipped',
    date: '2026-07-12',
  },
  {
    id: 1010,
    customer: 'Anna Taylor',
    email: 'anna@example.com',
    items: 6,
    total: 539.94,
    status: 'Pending',
    date: '2026-07-11',
  },
];

function Orders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Filter orders based on search term and status
  const filteredOrders = dummyOrders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toString().includes(searchTerm);

    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Get status color
  const getStatusColor = (status) => {
    const colors = {
      Pending: { bg: '#fff3e0', text: '#ed6c02' },
      Processing: { bg: '#e3f2fd', text: '#1976d2' },
      Shipped: { bg: '#f3e5f5', text: '#9c27b0' },
      Delivered: { bg: '#e8f5e9', text: '#2e7d32' },
      Cancelled: { bg: '#ffebee', text: '#d32f2f' },
    };
    return colors[status] || { bg: '#f5f5f5', text: '#757575' };
  };

  return (
    <Box>
      {/* Page Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Orders Management
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Track and manage customer orders
          </Typography>
        </Box>
      </Box>

      {/* Search and Filter */}
      <Paper
        sx={{
          p: 2,
          mb: 3,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          display: 'flex',
          gap: 2,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <TextField
          fullWidth
          placeholder="Search by order ID, customer name, or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ flex: 2 }}
        />
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Status Filter</InputLabel>
          <Select
            value={statusFilter}
            label="Status Filter"
            onChange={(e) => setStatusFilter(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <FilterListIcon color="action" sx={{ ml: -1 }} />
              </InputAdornment>
            }
          >
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Processing">Processing</MenuItem>
            <MenuItem value="Shipped">Shipped</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </Select>
        </FormControl>
      </Paper>

      {/* Orders Table */}
      <Paper
        sx={{
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          overflow: 'hidden',
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell sx={{ fontWeight: 600 }}>Order ID</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Customer</TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="center">
                  Items
                </TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Total</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((order) => {
                  const statusColor = getStatusColor(order.status);
                  return (
                    <TableRow
                      key={order.id}
                      sx={{
                        '&:hover': { backgroundColor: '#f9f9f9' },
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          #{order.id}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {order.customer}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {order.email}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Chip
                          label={order.items}
                          size="small"
                          sx={{
                            backgroundColor: '#e3f2fd',
                            color: '#1976d2',
                            fontWeight: 600,
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          ${order.total.toFixed(2)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={order.status}
                          size="small"
                          sx={{
                            backgroundColor: statusColor.bg,
                            color: statusColor.text,
                            fontWeight: 600,
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" color="text.secondary">
                          {new Date(order.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          size="small"
                          color="primary"
                          sx={{ mr: 0.5 }}
                        >
                          <VisibilityIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="primary">
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredOrders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            borderTop: '1px solid rgba(224, 224, 224, 1)',
          }}
        />
      </Paper>
    </Box>
  );
}

export default Orders;