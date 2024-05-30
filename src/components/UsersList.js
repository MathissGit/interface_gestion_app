// src/components/ListUsers.js
import React, { useContext, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, TablePagination } from '@mui/material';
import { SearchContext } from '../contexts/SearchContext';
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
    <TableContainer component={Paper} className="table-container">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Date of Birth</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Plan</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Date Registration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.slice(page * usersPerPage, page * usersPerPage + usersPerPage).map((user) => (
            <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center" component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="center">{`${user.firstname} ${user.lastname}`}</TableCell>
              <TableCell align="center">{user.datebirth}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.plan}</TableCell>
              <TableCell align="center">{user.role}</TableCell>
              <TableCell align="center">{user.dateRegistration}</TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={7} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={7}
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
