import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Avatar, Box, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { styled } from '@mui/material/styles';
import { users } from '../datas/data';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

function Dashboard() {
    const coaches = users.filter(user => user.role === 'Coach');

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Item>
                            Utilisateurs
                            <h2>{users.length}</h2>
                            <p>+20%</p>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            Cours actifs
                            <h2>5</h2>
                            <p>10 inactifs</p>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            Rendez-vous à venir
                            <h2>10</h2>
                            <p>15 en attentes</p>
                        </Item>
                    </Grid>
                    <Grid item xs={7}>
                        <Item>
                            Fréquentation
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <LineChart
                                    xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
                                    series={[
                                        {
                                            data: [100, 110, 100, 120, 150, 120, 160, 180, 200, 211, 200],
                                        },
                                    ]}
                                    width={500}
                                    height={338}
                                />
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={5}>
                        <Item>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <h2 style={{ paddingLeft: 10}}>Coachs</h2>
                                    <TableBody>
                                        {coaches.map((user) => (
                                            <TableRow key={user.email}>
                                                <TableCell style={{ display:'flex', paddingRight: '0' }} component="th" scope="row">
                                                    <Avatar src={user.avatar} alt={`${user.firstname} ${user.lastname}`} />
                                                    <div style={{ paddingLeft: 15}}>
                                                        <p style={{ padding: '0', margin: 0, fontWeight: 'bold' }}>{user.firstname + ' ' + user.lastname}</p>
                                                        <p style={{ margin: 0 }}>{user.email}</p>
                                                    </div>
                                                </TableCell>
                                                <TableCell style={{ paddingRight: '0', paddingLeft: '0', textAlign: 'center' }}>
                                                    <IconButton aria-label="edit">
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="delete">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                            Revenus générés
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <BarChart
                                    xAxis={[{ scaleType: 'band', data: ['Année 1', 'Année 2', 'Année 3'] }]}
                                    series={[{ data: [100, 500, 1000] }, { data: [150, 550, 1050] }, { data: [200, 600, 600] }]}
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            Nb cours
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <LineChart
                                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                    series={[
                                        {
                                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                                        },
                                    ]}
                                    height={300}
                                    margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                                    grid={{ vertical: true, horizontal: true }}
                                />
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Dashboard;
