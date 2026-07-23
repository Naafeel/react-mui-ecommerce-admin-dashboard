import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
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
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';

// Dummy data - we'll connect to API later
const dummyProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 89.99,
    stock: 45,
    status: 'Active',
    image: 'https://via.placeholder.com/50',
  },
  {
    id: 2,
    name: 'Smart Watch',
    category: 'Electronics',
    price: 149.99,
    stock: 28,
    status: 'Active',
    image: 'https://via.placeholder.com/50',
  },
  {
    id: 3,
    name: 'Running Shoes',
    category: 'Footwear',
    price: 79.99,
    stock: 0,
    status: 'Inactive',
    image: 'https://via.placeholder.com/50',
  },
  {
    id: 4,
    name: 'Backpack',
    category: 'Accessories',
    price: 49.99,
    stock: 67,
    status: 'Active',
    image: 'https://via.placeholder.com/50',
  },
  {
    id: 5,
    name: 'Sunglasses',
    category: 'Accessories',
    price: 29.99,
    stock: 5,
    status: 'Active',
    image: 'https://via.placeholder.com/50',
  },
  {
    id: 6,
    name: 'Laptop Stand',
    category: 'Electronics',
    price: 39.99,
    stock: 12,
    status: 'Active',
    image: 'https://via.placeholder.com/50',
  },
  {
    id: 7,
    name: 'Yoga Mat',
    category: 'Fitness',
    price: 24.99,
    stock: 89,
    status: 'Active',
    image: 'https://via.placeholder.com/50',
  },
  {
    id: 8,
    name: 'Water Bottle',
    category: 'Fitness',
    price: 14.99,
    stock: 150,
    status: 'Active',
    image: 'https://via.placeholder.com/50',
  },
];

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Filter products based on search term
  const filteredProducts = dummyProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
            Products Management
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage your product inventory and listings
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: '#1976d2',
            '&:hover': { backgroundColor: '#1565c0' },
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          Add New Product
        </Button>
      </Box>

      {/* Search Bar */}
      <Paper
        sx={{
          p: 2,
          mb: 3,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <TextField
          fullWidth
          placeholder="Search products by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: '#1976d2',
              },
            },
          }}
        />
      </Paper>

      {/* Products Table */}
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
                <TableCell sx={{ fontWeight: 600 }}>Image</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Product Name</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Category</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Price</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Stock</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product) => (
                  <TableRow
                    key={product.id}
                    sx={{
                      '&:hover': { backgroundColor: '#f9f9f9' },
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell>
                      <Box
                        component="img"
                        src={product.image}
                        alt={product.name}
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: 1,
                          objectFit: 'cover',
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {product.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {product.category}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        ${product.price.toFixed(2)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        sx={{
                          color:
                            product.stock === 0
                              ? '#d32f2f'
                              : product.stock < 10
                              ? '#ed6c02'
                              : 'inherit',
                          fontWeight: product.stock < 10 ? 600 : 400,
                        }}
                      >
                        {product.stock}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={product.status}
                        size="small"
                        sx={{
                          backgroundColor:
                            product.status === 'Active' ? '#e8f5e9' : '#ffebee',
                          color:
                            product.status === 'Active' ? '#2e7d32' : '#c62828',
                          fontWeight: 600,
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        size="small"
                        color="primary"
                        sx={{ mr: 0.5 }}
                      >
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="primary"
                        sx={{ mr: 0.5 }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredProducts.length}
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

export default Products;