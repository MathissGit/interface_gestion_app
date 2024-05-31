import React, { useContext, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, TablePagination, IconButton, Box } from '@mui/material';
import { SearchContext } from '../contexts/SearchContext';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { users } from '../datas/data';
import '../styles/App.css';
import TablePaginationActions from './TablePaginationActions';
import SearchBar from './SearchBar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function UserList() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [page, setPage] = useState(0);
  const AllUsers = users.length
  const [usersPerPage, setUsersPerPage] = useState(AllUsers);

  const filteredUsers = users.filter(user =>
    `${user.firstname} ${user.lastname}`.toLowerCase().includes(searchTerm.toLowerCase())
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
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TableContainer component={Paper} >
        <Stack className="header-list" justifyContent="space-between" direction="row" style={{alignItems: 'center'}} spacing={1}>

          <Stack direction="row" style={{alignItems: 'center'}} spacing={1}>
            <h1>Users</h1>
            <Chip label={`${filteredUsers.length} Users`} />
          </Stack>
          <Stack direction="row" style={{alignItems: 'center'}} spacing={1}>
            <Button color="success" variant="outlined">New User</Button>
            <Button color="success" variant="outlined">New Coach</Button>
            <Button color="success" variant="outlined">New Admin</Button>
          </Stack>
        </Stack>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell style={{fontWeight:"bold"}} align="center">ID</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="left">Name</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="center">Date of Birth</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="left">Email</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="center">Certification</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="center">Plan</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="center">Role</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="center">Date Registration</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.slice(page * usersPerPage, page * usersPerPage + usersPerPage).map((user) => (
              <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center" component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="left">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <img
                      src={user.avatar}
                      alt={`${user.name} avatar`}
                      style={{ width: 50, height: 50, borderRadius: '50%', marginRight: 8 }}
                    />
                    {`${user.firstname} ${user.lastname}`}
                  </div>
                </TableCell>
                <TableCell align="center">{user.datebirth}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="center">{user.certification}</TableCell>
                <TableCell align="center">{user.plan}</TableCell>
                <TableCell align="center">{user.role}</TableCell>
                <TableCell align="center">{user.dateRegistration}</TableCell>
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
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: AllUsers }]}
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
