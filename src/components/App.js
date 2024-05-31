import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Sidebar from './Sidebar';
import UserProfile from './UserProfile';
import '../styles/App.css';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CourseList from './CourseList';
import CoachList from './CoachList';
import PatientList from './PatientList';
import ListUsers from './UsersList'; 
import PlansList from './PlansList'; 
import Dashboard from './Dashboard'; 

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
                        toggleDarkMode={toggleDarkMode} 
                        darkMode={darkMode} 
                    />
                    
                    <div className="fullPageContainer">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2vh'}}>
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/utilisateurs" element={<ListUsers />} />
                                <Route path="/profile" element={<UserProfile />} />
                                <Route path="/cours" element={<CourseList />} />
                                <Route path="/plans" element={<PlansList />} />
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
