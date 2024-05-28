import React from 'react';
import Avatar from '@mui/material/Avatar';

const HeaderProfile = () => {
    return (
        <div className="HeaderProfile" style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
                alt="Theobald"
                src="../assets/profil.jpg"
                sx={{ width: 56, height: 56, marginRight: 2 }}
            />
            <div>
                <h1>Theobald</h1>
                <p>Role: Patient</p>
            </div>
        </div>
    );
};

export default HeaderProfile;
