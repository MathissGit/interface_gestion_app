import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FabriceEboue from '../assets/profil.jpg';

function UserProfile() {
    const [user, setUser] = useState(null);
    const userId = 13; // exemple avec un id definie mais doit etre celui du compte avec lequel on est connecté

    useEffect(() => {
        axios.get(`http://localhost:3001/user/${userId}`)
            .then(response => {
                setUser(response.data); 
            })
            .catch(error => {
                console.error('Il y a eu une erreur!', error);
            });
    }, []);

    return (
        <div className="fullPageContainer" style={{ alignItems: 'center' }}>
            <div className='profil'>
                <div className='display-picture'>
                    <img className='avatarProfil' alt='Fabrice Eboué' src={FabriceEboue} />
                    <div className='backAvatar'></div>
                </div>
                <div className='banner'></div>
                {user ? (
                    <>
                        <h1 className='display-name'>{user.firstname} {user.lastname}</h1>
                        <p className='display-role'>Role: {user.role}</p>
                        <div className="middleContainer" style={{ marginTop: '20px' }}>
                            <div>
                                <div style={{ marginBottom: '10px' }}>
                                    <h3>Email</h3>
                                    <input type="email" value={user.email} readOnly style={{ width: '100%', padding: '8px' }} />
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <h3>Date of birth</h3>
                                    <input type="text" value={user.datebirth} readOnly style={{ width: '100%', padding: '8px' }} />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Pas de donnés. NE DOIT PAS ETRE VUE</p>
                )}
            </div>
        </div>
    );
}

export default UserProfile;
