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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Sidebar = ({ toggleDarkMode, darkMode }) => {
    const location = useLocation();

    const StyledListItem = styled(ListItem)(({ theme }) => ({
        '&.active, &:hover': {
            color: theme.palette.primary.main,
            '& .MuiListItemIcon-root': {
                color: theme.palette.primary.main,
            },
        },
    }));

    return (
        <div className="sidebar">
            <List className="sidebar-list">
                <ListItem className={`sidebar-item ${location.pathname === '/' ? 'active' : ''}`} button component={Link} to="/" >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary='Dashboard' className="list-item-text" />
                </ListItem>
                <ListItem className={`sidebar-item ${location.pathname === '/post' ? 'active' : ''}`} button component={Link} to="/post">
                    <ListItemIcon>
                        <PostAddIcon />
                    </ListItemIcon>
                    <ListItemText primary='Post' className="list-item-text" />
                </ListItem>
                <ListItem className={`sidebar-item ${location.pathname === '/cours' ? 'active' : ''}`} button component={Link} to="/cours">
                    <ListItemIcon>
                        <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText primary='Cours' className="list-item-text" />
                </ListItem>
                <ListItem className={`sidebar-item ${location.pathname === '/messages' ? 'active' : ''}`} button component={Link} to="/messages">
                    <ListItemIcon>
                        <MessageIcon />
                    </ListItemIcon>
                    <ListItemText primary='Messages' className="list-item-text" />
                </ListItem>
                <ListItem className={`sidebar-item ${location.pathname === '/rendez-vous' ? 'active' : ''}`} button component={Link} to="/rendez-vous">
                    <ListItemIcon>
                        <CalendarTodayIcon />
                    </ListItemIcon>
                    <ListItemText primary='Entrevue' className="list-item-text" />
                </ListItem>
                <ListItem className={`sidebar-item ${location.pathname === '/transaction' ? 'active' : ''}`} button component={Link} to="/transaction">
                    <ListItemIcon>
                        <PaymentIcon />
                    </ListItemIcon>
                    <ListItemText primary='Transaction' className="list-item-text" />
                </ListItem>
                <ListItem className={`sidebar-item ${location.pathname === '/utilisateurs' ? 'active' : ''}`} button component={Link} to="/utilisateurs">
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary='Utilisateurs' className="list-item-text" />
                </ListItem>
                <ListItem className={`sidebar-item ${location.pathname === '/parametres' ? 'active' : ''}`} button component={Link} to="/parametres">
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary='Paramètres' className="list-item-text" />
                </ListItem>
                <ListItem className={`sidebar-item ${location.pathname === '/outils' ? 'active' : ''}`} button component={Link} to="/outils">
                    <ListItemIcon>
                        <BuildIcon />
                    </ListItemIcon>
                    <ListItemText primary='Outils' className="list-item-text" />
                </ListItem>
                <div className="sidebar-bottom">
                    <ListItem className="sidebar-item" >
                        <ListItemIcon>
                            <Brightness2Icon />
                        </ListItemIcon>
                        <FormControlLabel
                            control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
                            label="Theme"
                            className="list-item-text"
                        />
                    </ListItem>
                    <ListItem className={`sidebar-item ${location.pathname === '/profile' ? 'active' : ''}`} button component={Link} to="/profile">
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary='Profile' className="list-item-text" />
                    </ListItem>
                </div>
            </List>
        </div>
    );
};

export default Sidebar;
