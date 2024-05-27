import React from 'react';

const UserProfile = () => {
    return (
        <div className="user-profile">
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" value="Theobald@truc.com" readOnly />
                </div>
                <div>
                    <label>Description</label>
                    <textarea value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." readOnly />
                </div>
                <div>
                    <label>Date of birth</label>
                    <input type="text" value="01/03/1980" readOnly />
                </div>
            </form>
        </div>
    );
};

export default UserProfile;
