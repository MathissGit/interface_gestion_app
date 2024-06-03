import React from 'react';
import { Avatar } from '@mui/material';
import { users } from '../datas/data'
import FabriceEboue from '../assets/profil.jpg'

function UpsertUser() {
    return (
        <div className="fullPageContainer" style={{ alignItems: 'center' }}>
            <div>
                <div>
                    <img className='avatarProfil' alt='Fabrice Ebouué' src={FabriceEboue}  />
                    <div className='backAvatar'></div>
                </div>
                <div className='banner'>
                </div>
                <h1 className='display-name'>Fabrice Eboué</h1>
                <p className='display-role'>Role: Patient</p>
                <div className="middleContainer" style={{ marginTop: '20px' }}>
                    <div>
                        <div style={{ marginBottom: '10px' }}>
                            <label>Email</label>
                            <input type="email" value="Theobald@truc.com" readOnly style={{ width: '100%', padding: '8px' }} />
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label>Description</label>
                            <textarea
                                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                readOnly
                                style={{ width: '100%', padding: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label>Date of birth</label>
                            <input type="text" value="01/03/1980" readOnly style={{ width: '100%', padding: '8px' }} />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default UpsertUser;
