import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../redux/userSlice';

const UserSearch = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchUser(username));
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default UserSearch;