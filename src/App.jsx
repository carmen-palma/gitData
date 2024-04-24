import React from 'react';
import UserSearch from './components/UserSearch';
import UserDetail from './components/UserDetail';

const App = () => {
  return (
    <div>
      <h1>Buscador de Usuario de GitHub</h1>
      <UserSearch />
      <UserDetail />
    </div>
  );
};

export default App;
