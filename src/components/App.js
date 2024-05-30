import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Sidebar from './Sidebar';
import UserProfile from './UserProfile';
import '../styles/App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Header from './Header';
import CourseList from './CourseList';
import CoachList from './CoachList';
import PatientList from './PatientList';
import ListUsers from './UsersList'; 

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [sidebarExpanded, setSidebarExpanded] = useState(false);

    useEffect(() => {
        document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleSidebarHoverChange = (isHovered) => {
        setSidebarExpanded(isHovered);
    };

    function createData(name, email, image) {
        return { name, email, image };
    }

    const rows = [
        createData('Benbaloulie Nahim', 'nahim@nahim.com', 'BN'),
        createData('Roche Pierre', 'pierre@roche.com', 'RP'),
        createData('Lefevre Paul', 'paul@lefevre.com', 'LP'),
        createData('Blanc Thomas', 'thomas@blanc.com', 'BT'),
    ];

    const backgroundColor = darkMode ? '#41403f' : '#c1c0bd';

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }));

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <div style={{ display: 'flex', backgroundColor }} className='dashboard'>
                    <Sidebar 
                        position="fixed" 
                        toggleDarkMode={toggleDarkMode} 
                        darkMode={darkMode} 
                        onHoverChange={handleSidebarHoverChange} 
                    />
                    <div className={`dashboard-content ${sidebarExpanded ? 'dashboard-content-expanded' : ''}`}>
                        <Header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}/>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '35vh', paddingBottom :'10vh', width: '175vh'}}>
                            <Routes>
                                <Route path="/" element={
                                    <div>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={4}>
                                                    <Item>
                                                        Utilisateurs
                                                        <h2>500</h2>
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
                                                                sx={{ 
                                                                    // Vous pouvez ajouter des styles spécifiques ici si nécessaire 
                                                                }}
                                                                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
                                                                series={[
                                                                    {
                                                                        data: [100, 110, 100, 120, 150, 120, 160, 180, 200, 211, 200],
                                                                    },
                                                                ]}
                                                                width={500}
                                                                height={488}
                                                            />
                                                        </div>
                                                    </Item>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Item>
                                                        <TableContainer component={Paper}>
                                                            <Table sx={{ maxWidth: 100 }} aria-label="simple table">
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <TableCell>Coach</TableCell>
                                                                        <TableCell align="right">Name</TableCell>
                                                                        <TableCell align="right">Email</TableCell>
                                                                        <TableCell align="right">Editer</TableCell>
                                                                    </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                    {rows.map((row) => (
                                                                        <TableRow
                                                                            key={row.name}
                                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                        >
                                                                            <TableCell component="th" scope="row">
                                                                                <Avatar>{row.image}</Avatar>
                                                                            </TableCell>
                                                                            <TableCell component="th" scope="row">
                                                                                {row.name}
                                                                            </TableCell>
                                                                            <TableCell align="right">{row.email}</TableCell>
                                                                            <TableCell align="right">
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
                                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
                                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
                                } />
                                <Route path="/utilisateurs" element={<ListUsers />} />
                                <Route path="/profile" element={<UserProfile />} />
                                <Route path="/courses" element={<CourseList />} />
                                <Route path="/coaches" element={<CoachList />} />
                                <Route path="/patients" element={<PatientList />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
