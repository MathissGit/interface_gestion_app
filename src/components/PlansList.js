import React, { useContext, useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, TablePagination, IconButton, Stack, Button, Chip, TextField, MenuItem } from '@mui/material';
import { SearchContext } from '../contexts/SearchContext';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../styles/App.css';
import TablePaginationActions from './TablePaginationActions';
import SearchBar from './SearchBar';
import axios from 'axios';

const PlansList = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [page, setPage] = useState(0);
  const [plansPerPage, setPlansPerPage] = useState(5);
  const [durationFilter, setDurationFilter] = useState('');
  const [plan, setAllPlans] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/plans`)
      .then(response => {
        setAllPlans(response.data);
      })
      .catch(error => {
        console.error('Il y a eu une erreur!', error);
      });
  }, []);

  const filteredPlans = plan.filter(plan => {
    const matchesName = plan.name && plan.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesName;
  });
  
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * plansPerPage - filteredPlans.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPlansPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="fullPageContainer">
      <Stack direction="row" spacing={2} alignItems="center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TextField
          select
          label="Duration"
          value={durationFilter}
          onChange={(e) => setDurationFilter(e.target.value)}
          style={{ width: 150 }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="30">3 mois</MenuItem>
          <MenuItem value="60">6 mois</MenuItem>
          <MenuItem value="90">12 moiss</MenuItem>
        </TextField>
      </Stack>
      <TableContainer component={Paper}>
        <Stack className="header-list" justifyContent="space-between" direction="row" style={{ alignItems: 'center' }} spacing={1}>
          <Stack direction="row" style={{ alignItems: 'center' }} spacing={1}>
            <h1>Plans</h1>
            <Chip label={`${filteredPlans.length} plans`} />
          </Stack>
          <Stack direction="row" style={{ alignItems: 'center' }} spacing={1}>
            <Button color="success" variant="outlined">New Plan</Button>
          </Stack>
        </Stack>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }} align="center">ID</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">Description</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPlans.slice(page * plansPerPage, page * plansPerPage + plansPerPage).map((plan) => (
              <TableRow key={plan.Id_Plan} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center" component="th" scope="row">
                  {plan.Id_Plan}
                </TableCell>
                <TableCell align="left">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    {plan.name}
                  </div>
                </TableCell>
                <TableCell align="left">{plan.description}</TableCell>
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
                count={filteredPlans.length}
                rowsPerPage={plansPerPage}
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
