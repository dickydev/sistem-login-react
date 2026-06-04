import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      await login(username, password);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        placeholder="username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">submit</button>
    </form>
  );
};

export default Login;
