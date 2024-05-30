import React, { useContext, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, TablePagination, IconButton, Box } from '@mui/material';
import { SearchContext } from '../contexts/SearchContext';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { users } from '../datas/users';
import '../styles/App.css';
import TablePaginationActions from './TablePaginationActions';
import SearchBar from './SearchBar';

function UserList() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [page, setPage] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState(5);

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
    <TableContainer component={Paper} className="fullPageContainer">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Date of Birth</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="center">Plan</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Date Registration</TableCell>
            <TableCell align="center">Action</TableCell>
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
  );
}

export default UserList;
