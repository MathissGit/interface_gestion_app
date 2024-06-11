import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { TextField, Button, Stack, MenuItem } from '@mui/material';
import '../styles/App.css';
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
        console.error(err); // Ajoutez un log pour vérifier l'erreur
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
    <div>
      {action === 'view' && (
        <div>
          <h1>{user.lastname} {user.firstname}</h1>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <p>Certification: {user.certification ? 'Yes' : 'No'}</p>
        </div>
      )}
      {action === 'edit' && (
        <div >
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
                date
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
          <button onClick={handleDelete}>Yes, Delete</button>
          <button onClick={() => navigate('/users')}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
