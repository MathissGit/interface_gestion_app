// src/Sidebar.js
import React from 'react';
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
import StickyBox from "react-sticky-box";

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
        <StickyBox className="sidebar">
            <List className="sidebar-list">
                <StyledListItem className={`sidebar-item ${location.pathname === '/' ? 'active' : ''}`} button component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary='Dashboard' className="list-item-text" />
                </StyledListItem>
                <StyledListItem className={`sidebar-item ${location.pathname === '/plans' ? 'active' : ''}`} button component={Link} to="/plans">
                    <ListItemIcon>
                        <PostAddIcon />
                    </ListItemIcon>
                    <ListItemText primary='Plans' className="list-item-text" />
                </StyledListItem>
                <StyledListItem className={`sidebar-item ${location.pathname === '/course' ? 'active' : ''}`} button component={Link} to="/course">
                    <ListItemIcon>
                        <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText primary='Course' className="list-item-text" />
                </StyledListItem>
                <StyledListItem className={`sidebar-item ${location.pathname === '/messages' ? 'active' : ''}`} button component={Link} to="/messages">
                    <ListItemIcon>
                        <MessageIcon />
                    </ListItemIcon>
                    <ListItemText primary='Messagerie' className="list-item-text" />
                </StyledListItem>
                <StyledListItem className={`sidebar-item ${location.pathname === '/calendar' ? 'active' : ''}`} button component={Link} to="/calendar">
                    <ListItemIcon>
                        <CalendarTodayIcon />
                    </ListItemIcon>
                    <ListItemText primary='Entrevue' className="list-item-text" />
                </StyledListItem>
                <StyledListItem className={`sidebar-item ${location.pathname === '/transaction' ? 'active' : ''}`} button component={Link} to="/transaction">
                    <ListItemIcon>
                        <PaymentIcon />
                    </ListItemIcon>
                    <ListItemText primary='Transaction' className="list-item-text" />
                </StyledListItem>
                <StyledListItem className={`sidebar-item ${location.pathname === '/users' ? 'active' : ''}`} button component={Link} to="/users">
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary='Utilisateurs' className="list-item-text" />
                </StyledListItem>
                <div className="sidebar-bottom">
                    <StyledListItem className="sidebar-item">
                        <ListItemIcon>
                            <Brightness2Icon />
                        </ListItemIcon>
                        <FormControlLabel
                            control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
                            label="Theme"
                            className="list-item-text"
                        />
                    </StyledListItem>
                    <StyledListItem className={`sidebar-item ${location.pathname === '/profile' ? 'active' : ''}`} button component={Link} to="/profile">
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary='Profile' className="list-item-text" />
                    </StyledListItem>
                </div>
            </List>
        </StickyBox>
    );
};

export default Sidebar;
