import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { TextField, Button, Stack, MenuItem } from '@mui/material';
import axios from 'axios';


const UserDetails = () => {
  const { userId } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});
  const action = location.state?.action || 'view';

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/user/${userId}`);
        setUser(response.data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [userId]);

  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>No user found</p>;

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/user/${userId}`);
      navigate('/users');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/user/${userId}`, user);
      navigate('/users');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fullPageContainer" style={{ alignItems: 'center' }}>
      <div className='profil'>
        <div className='display-picture'>
          <img className='avatarProfil' src={user.avatar} alt={`${user.firstname} ${user.lastname}`}/>
          <div className='backAvatar'></div>
        </div>
        <div className='banner'></div>
        {action === 'view' && (
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
                <div style={{ marginBottom: '10px' }}>
                  <h3>Certification</h3>
                  <input type="text" value={user.certification ? 'Yes' : 'No'} readOnly style={{ width: '100%', padding: '8px' }} />
                </div>
              </div>
            </div>
          </>
        )}
        {action === 'edit' && (
          <div>
            <h1>Edit User: <u>{user.lastname} {user.firstname}</u></h1>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="First Name"
                  name="firstname"
                  value={user.firstname || ''}
                  onChange={handleInputChange}
                  fullWidth
                />
                <TextField
                  label="Last Name"
                  name="lastname"
                  value={user.lastname || ''}
                  onChange={handleInputChange}
                  fullWidth
                />
                <TextField
                  label="Date Birth"
                  name="datebirth"
                  value={user.datebirth || ''}
                  onChange={handleInputChange}
                  type="date"
                  fullWidth
                />
                <TextField
                  label="Email"
                  name="email"
                  value={user.email || ''}
                  onChange={handleInputChange}
                  fullWidth
                />
                <TextField
                  label="Role"
                  name="role"
                  value={user.role || ''}
                  onChange={handleInputChange}
                  fullWidth
                />
                <TextField
                  label="Certification"
                  name="certification"
                  value={user.certification ? 'Yes' : 'No'}
                  onChange={(e) => handleInputChange({ target: { name: 'certification', value: e.target.value === 'Yes' } })}
                  select
                  fullWidth
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </TextField>
                <Button type="submit" variant="contained" color="primary">Save</Button>
              </Stack>
            </form>
          </div>
        )}
        {action === 'delete' && (
          <div>
            <h1>Delete User : <u>{user.lastname} {user.firstname}</u> ?</h1>
            <p>Are you sure you want to delete {user.lastname} {user.firstname}?</p>
            <Button onClick={handleDelete} variant="contained" color="secondary">Yes, Delete</Button>
            <Button onClick={() => navigate('/users')} variant="contained">Cancel</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDetails;
