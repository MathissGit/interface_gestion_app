import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, Toolbar, createTheme } from '@mui/material';
import Sidebar from './Sidebar';
import UserProfile from './UserProfile';
import '../styles/App.css';
import HeaderProfile from './HeaderProfile';
import ListUsers from './UsersList';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

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

    const backgroundColor = darkMode ? '#41403f' : '#c1c0bd';

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <div style={{ display: 'flex', backgroundColor }}>
                    <Sidebar position="fixed" toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                    <div style={{ flexGrow: 1 }}>
                        <div style={{ padding: '20px' }}>
                            <Routes>
                                <Route path="/" element={<h1>Bienvenue sur le tableau de bord</h1>} />
                                <Route path="/utilisateurs" element={<ListUsers />} />
                                <Route path="/profile" element={<UserProfile />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
