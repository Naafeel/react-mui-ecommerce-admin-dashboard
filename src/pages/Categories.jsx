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
import SearchIcon from '@mui/icons-material/Search';

// Dummy data - we'll connect to API later
const dummyCategories = [
  {
    id: 1,
    name: 'Electronics',
    slug: 'electronics',
    description: 'Gadgets, devices, and electronic accessories',
    productCount: 45,
    status: 'Active',
  },
  {
    id: 2,
    name: 'Footwear',
    slug: 'footwear',
    description: 'Shoes, boots, and sandals for all occasions',
    productCount: 28,
    status: 'Active',
  },
  {
    id: 3,
    name: 'Accessories',
    slug: 'accessories',
    description: 'Bags, watches, sunglasses, and more',
    productCount: 67,
    status: 'Active',
  },
  {
    id: 4,
    name: 'Fitness',
    slug: 'fitness',
    description: 'Exercise equipment and fitness gear',
    productCount: 34,
    status: 'Active',
  },
  {
    id: 5,
    name: 'Home & Garden',
    slug: 'home-garden',
    description: 'Furniture, decor, and gardening supplies',
    productCount: 52,
    status: 'Inactive',
  },
  {
    id: 6,
    name: 'Books',
    slug: 'books',
    description: 'Fiction, non-fiction, and educational books',
    productCount: 89,
    status: 'Active',
  },
];

function Categories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Filter categories based on search term
  const filteredCategories = dummyCategories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
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
            Categories Management
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Organize your products into categories
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
          Add New Category
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
          placeholder="Search categories by name or description..."
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

      {/* Categories Table */}
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
                <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Slug</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="center">
                  Products
                </TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCategories
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((category) => (
                  <TableRow
                    key={category.id}
                    sx={{
                      '&:hover': { backgroundColor: '#f9f9f9' },
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {category.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontFamily: 'monospace', fontSize: '0.875rem' }}
                      >
                        {category.slug}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          maxWidth: 300,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {category.description}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Chip
                        label={category.productCount}
                        size="small"
                        sx={{
                          backgroundColor: '#e3f2fd',
                          color: '#1976d2',
                          fontWeight: 600,
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={category.status}
                        size="small"
                        sx={{
                          backgroundColor:
                            category.status === 'Active' ? '#e8f5e9' : '#ffebee',
                          color:
                            category.status === 'Active' ? '#2e7d32' : '#c62828',
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
          count={filteredCategories.length}
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

export default Categories;