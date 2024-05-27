import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import UserProfile from './UserProfile';

const App = () => {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ flexGrow: 1 }}>
                    <Header />
                    <div style={{ padding: '20px' }}>
                        <Routes>
                            <Route path="/" element={<h1>Bienvenue sur le tableau de bord</h1>} />
                            <Route path="/profile" element={<UserProfile />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
