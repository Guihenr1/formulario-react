import React from 'react';
import './App.css';
import UserForm from './pages/user/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ padding: 15 }}>
      <UserForm></UserForm>
    </div>
  );
}

export default App;
