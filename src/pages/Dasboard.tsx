import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { state, logout } = useAuth();
  return (
    <div>
      <h2>DASHBOARD</h2>
      <p>username : {state.user?.username}</p>
      <p>password : {state.password}</p>
      <p>token : {state.token}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
