import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Switch, FormControlLabel, Slide } from '@mui/material';
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
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link } from 'react-router-dom';

const Sidebar = ({ toggleDarkMode, darkMode }) => {
    const [hover, setHover] = useState(false);
    const trigger = useScrollTrigger();

    return (
        <div in={!trigger}
            className={`sidebar ${hover ? 'sidebar-expanded' : 'sidebar-collapsed'}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <List className="sidebar-list">
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary='Dashboard' className="list-item-text" />
                </ListItem>

                <ListItem button component={Link} to="/post">
                    <ListItemIcon>
                        <PostAddIcon />
                    </ListItemIcon>
                    <ListItemText primary='Post' className="list-item-text" />
                </ListItem>

                <ListItem button component={Link} to="/cours">
                    <ListItemIcon>
                        <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText primary='Cours' className="list-item-text" />
                </ListItem>

                <ListItem button component={Link} to="/messages">
                    <ListItemIcon>
                        <MessageIcon />
                    </ListItemIcon>
                    <ListItemText primary='Messages' className="list-item-text" />
                </ListItem>

                <ListItem button component={Link} to="/rendez-vous">
                    <ListItemIcon>
                        <CalendarTodayIcon />
                    </ListItemIcon>
                    <ListItemText primary='Rendez-vous' className="list-item-text" />
                </ListItem>

                <ListItem button component={Link} to="/transaction">
                    <ListItemIcon>
                        <PaymentIcon />
                    </ListItemIcon>
                    <ListItemText primary='Transaction' className="list-item-text" />
                </ListItem>

                <ListItem button component={Link} to="/utilisateurs">
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary='Utilisateurs' className="list-item-text" />
                </ListItem>

                <ListItem button component={Link} to="/paramètres">
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary='Paramètres' className="list-item-text" />
                </ListItem>

                <ListItem button component={Link} to="/outils">
                    <ListItemIcon>
                        <BuildIcon />
                    </ListItemIcon>
                    <ListItemText primary='Outils' className="list-item-text" />
                </ListItem>

                <div className="sidebar-bottom">
                    <ListItem>
                        <ListItemIcon>
                            <Brightness2Icon />
                        </ListItemIcon>
                        <FormControlLabel
                            control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
                            label="Theme"
                            // style={{ marginLeft: '10px', marginTop: '160px' }}
                            className="list-item-text"
                        />
                    </ListItem>
                    <ListItem button component={Link} to="/profile">
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
