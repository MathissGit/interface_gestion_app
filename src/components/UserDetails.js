import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserDetails = () => {
  const { userId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/user/${userId}`);
        console.log(response.data); // Ajoutez un log pour vérifier la réponse
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

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (!user) return <p>Aucun utilisateur trouvé</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email : {user.email}</p>
      <p>Rôle : {user.role}</p>
      <p>Certification : {user.certification ? 'Oui' : 'Non'}</p>
    </div>
  );
};

export default UserDetails;
