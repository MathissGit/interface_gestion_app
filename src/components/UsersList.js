import React, { useContext, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, TablePagination, IconButton, Stack, Button, Chip, TextField, MenuItem } from '@mui/material';
import { SearchContext } from '../contexts/SearchContext';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { users } from '../datas/data';
import '../styles/App.css';
import TablePaginationActions from './TablePaginationActions';
import SearchBar from './SearchBar';

const UserList = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [page, setPage] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState(5);
  const [roleFilter, setRoleFilter] = useState('');
  const [certificationFilter, setCertificationFilter] = useState('');

  const filteredUsers = users.filter(user =>
    (user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (roleFilter === '' || user.role.toLowerCase() === roleFilter.toLowerCase()) &&
    (certificationFilter === '' || (certificationFilter === 'Oui' && user.certification) || (certificationFilter === 'Non' && !user.certification))
  );
  

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * usersPerPage - filteredUsers.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setUsersPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="fullPageContainer">
      <Stack direction="row" spacing={2} alignItems="center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TextField
          select
          label="Role"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          style={{ width: 150 }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="coach">Coach</MenuItem>
          <MenuItem value="patient">Patient</MenuItem>

        </TextField>
        <TextField
          select
          label="Certification"
          value={certificationFilter}
          onChange={(e) => setCertificationFilter(e.target.value)}
          style={{ width: 150 }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Oui">Yes</MenuItem>
          <MenuItem value="Non">No</MenuItem>
        </TextField>
      </Stack>
      <TableContainer component={Paper}>
        <Stack className="header-list" justifyContent="space-between" direction="row" style={{ alignItems: 'center' }} spacing={1}>
          <Stack direction="row" style={{ alignItems: 'center' }} spacing={1}>
            <h1>Users</h1>
            <Chip label={`${filteredUsers.length} users`} />
          </Stack>
          <Stack direction="row" style={{ alignItems: 'center' }} spacing={1}>
            <Button color="success" variant="outlined">New User</Button>
          </Stack>
        </Stack>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }} align="center">ID</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">Email</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">Role</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">Certification</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.slice(page * usersPerPage, page * usersPerPage + usersPerPage).map((user) => (
              <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center" component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="left">{user.name}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="center">{user.role}</TableCell>
                <TableCell align="center">{user.certification ? 'Yes' : 'No'}</TableCell>
                <TableCell align="center">
                  <IconButton aria-label="view">
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={8} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={8}
                count={filteredUsers.length}
                rowsPerPage={usersPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserList;
