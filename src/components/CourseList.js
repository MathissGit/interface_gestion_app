import React, { useContext, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, TablePagination, IconButton, Stack, Button, Chip, TextField, MenuItem } from '@mui/material';
import { Autocomplete, createFilterOptions } from '@mui/material';
import { SearchContext } from '../contexts/SearchContext';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { cours } from '../datas/data';
import '../styles/App.css';
import TablePaginationActions from './TablePaginationActions';
import SearchBar from './SearchBar';

const CoursList = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [page, setPage] = useState(0);
  const [coursPerPage, setCoursPerPage] = useState(5);
  const [durationFilter, setDurationFilter] = useState('');
  const [coachFilter, setCoachFilter] = useState('');
  const [costFilter, setCostFilter] = useState('');
  const [certificationFilter, setCertificationFilter] = useState('');

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.name,
  });

  const filteredCours = cours.filter(cours =>
    (cours.name.toLowerCase().includes(searchTerm.toLowerCase()) || cours.coachName.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (durationFilter === '' || cours.duration === parseInt(durationFilter)) &&
    (coachFilter === '' || cours.coachName.toLowerCase().includes(coachFilter.toLowerCase())) &&
    (costFilter === '' || cours.cost === parseInt(costFilter)) && // Comparaison en nombre
    (certificationFilter === '' || (certificationFilter === 'Oui' && cours.certification === 'Active') || (certificationFilter === 'Non' && cours.certification !== 'Active'))
);


  const emptyRows = page > 0 ? Math.max(0, (1 + page) * coursPerPage - filteredCours.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setCoursPerPage(parseInt(event.target.value, 10));
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
          {/* Add specific duration options */}
          <MenuItem value="1">1 mois</MenuItem>
          <MenuItem value="2">2 mois</MenuItem>
          <MenuItem value="3">3 mois</MenuItem>
        </TextField>
        <TextField
          select
          label="Cost"
          value={costFilter}
          onChange={(e) => setCostFilter(e.target.value)}
          style={{ width: 150 }}
        >
          <MenuItem value="">All</MenuItem>
          {/* Add specific cost options */}
          <MenuItem value="50">$50</MenuItem>
          <MenuItem value="100">$100</MenuItem>
          <MenuItem value="150">$150</MenuItem>
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
            <h1>Cours</h1>
            <Chip label={`${filteredCours.length} cours`} />
          </Stack>
          <Stack direction="row" style={{ alignItems: 'center' }} spacing={1}>
            <Button color="success" variant="outlined">New Cours</Button>
          </Stack>
        </Stack>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }} align="center">ID</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">Coach Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">Description</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">Duration</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">Cost</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">Certification</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCours.slice(page * coursPerPage, page * coursPerPage + coursPerPage).map((cours) => (
              <TableRow key={cours.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center" component="th" scope="row">
                  {cours.id}
                </TableCell>
                <TableCell align="left">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    {cours.coachName}
                  </div>
                </TableCell>
                <TableCell align="left">{cours.name}</TableCell>
                <TableCell align="left">{cours.description}</TableCell>
                <TableCell align="center">{`${cours.duration}  mois`}</TableCell>
                <TableCell align="center">{`${cours.cost}€`}</TableCell>
                <TableCell align="center">{cours.certification === 'Active' ? 'Oui' : 'Non'}</TableCell>
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
                count={filteredCours.length}
                rowsPerPage={coursPerPage}
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

export default CoursList;
