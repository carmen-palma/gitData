import React from 'react';
import { useSelector } from 'react-redux';

const UserDetail = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h2>Detalles del Usuario</h2>
      {user && (
        <div>
          <p>Nombre: {user.name}</p>
          <p>Nombre de usuario: {user.login}</p>
          <p>Seguidores: {user.followers}</p>
          <p>Repositorios públicos: {user.public_repos}</p>
          <img src={user.avatar_url} alt="Avatar" />
        </div>
      )}
    </div>
  );
};

export default UserDetail;