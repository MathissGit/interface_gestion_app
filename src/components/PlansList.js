import React, { useContext, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, TablePagination, IconButton, Box } from '@mui/material';
import { SearchContext } from '../contexts/SearchContext';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { plan } from '../datas/data';
import '../styles/App.css';
import TablePaginationActions from './TablePaginationActions';
import SearchBar from './SearchBar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function PlansList() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [page, setPage] = useState(0);
  const [planPerPage, setplanPerPage] = useState(5);

  const filteredplan = plan.filter(plan =>
    `${plan.firstname} ${plan.lastname}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * planPerPage - filteredplan.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setplanPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="fullPageContainer">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TableContainer component={Paper} >
        <Stack className="header-list" justifyContent="space-between" direction="row" style={{alignItems: 'center'}} spacing={1}>

          <Stack direction="row" style={{alignItems: 'center'}} spacing={1}>
            <h1>plan</h1>
            <Chip label={`${filteredplan.length} plan`} />
          </Stack>
          <Stack direction="row" style={{alignItems: 'center'}} spacing={1}>
            <Button color="success" variant="outlined">New plan</Button>
          </Stack>
        </Stack>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell style={{fontWeight:"bold"}} align="center">ID</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="left">Intitulé</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="left">Description</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="center">Cout</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="center">Durée</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredplan.slice(page * planPerPage, page * planPerPage + planPerPage).map((plan) => (
              <TableRow key={plan.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center" component="th" scope="row">
                  {plan.id}
                </TableCell>
                <TableCell align="left">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    {plan.name}
                  </div>
                </TableCell>
                <TableCell align="left">{plan.description}</TableCell>
                <TableCell align="center">{plan.cost}</TableCell>
                <TableCell align="center">{plan.duration}</TableCell>
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
                count={filteredplan.length}
                rowsPerPage={planPerPage}
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

export default PlansList;
