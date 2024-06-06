import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserDetails = () => {
  const { userId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState([]);


   useEffect(() => {
     const fetchUser = async () => {
       try {
        const response = axios.get("user/${userId}").then(response => {
            setUser(response.data); 
          })
        if (!response.ok) {
          throw new Error("HTTP error! Status: ${response.status}");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
        console.log("Test");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>No user found</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Certification: {user.certification ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default UserDetails;