import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Switch, FormControlLabel } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SchoolIcon from '@mui/icons-material/School';
import MessageIcon from '@mui/icons-material/Message';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PaymentIcon from '@mui/icons-material/Payment';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import { Link } from 'react-router-dom';

const Sidebar = ({ toggleDarkMode, darkMode }) => {
    return (
        <div className="sidebar">
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary='Dashboard' />
                </ListItem>

                <ListItem button component={Link} to="/post">
                    <ListItemIcon>
                        <PostAddIcon />
                    </ListItemIcon>
                    <ListItemText primary='Post' />
                </ListItem>

                <ListItem button component={Link} to="/cours">
                    <ListItemIcon>
                        <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText primary='Cours' />
                </ListItem>

                <ListItem button component={Link} to="/messages">
                    <ListItemIcon>
                        <MessageIcon />
                    </ListItemIcon>
                    <ListItemText primary='Messages' />
                </ListItem>

                <ListItem button component={Link} to="/rendez-vous">
                    <ListItemIcon>
                        <CalendarTodayIcon />
                    </ListItemIcon>
                    <ListItemText primary='Rendez-vous' />
                </ListItem>

                <ListItem button component={Link} to="/transaction">
                    <ListItemIcon>
                        <PaymentIcon />
                    </ListItemIcon>
                    <ListItemText primary='Transaction' />
                </ListItem>

                <ListItem button component={Link} to="/utilisateurs">
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary='Utilisateurs' />
                </ListItem>

                <ListItem button component={Link} to="/paramètres">
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary='Paramètres' />
                </ListItem>

                <ListItem button component={Link} to="/outils">
                    <ListItemIcon>
                        <BuildIcon />
                    </ListItemIcon>
                    <ListItemText primary='Outils' />
                </ListItem>
            </List>
            <FormControlLabel
                control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
                label="Mode sombre"
                style={{ marginLeft: '10px', marginTop: '20px' }}
            />
        </div>
    );
};

export default Sidebar;
