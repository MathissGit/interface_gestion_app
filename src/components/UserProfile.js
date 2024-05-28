import React from 'react';
import HeaderProfile from './HeaderProfile';

const UserProfile = () => {
    return (
        <div>
            <HeaderProfile />
            <div className="user-profile" style={{ marginTop: '20px' }}>
                <form>
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
                </form>
            </div>
        </div>
    );
};

export default UserProfile;
