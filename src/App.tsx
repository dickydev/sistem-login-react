import { useAuth } from './context/AuthContext';
import { Login, Dashboard } from './pages';

const App = () => {
  const { state } = useAuth();
  return (
    <div>
      {state.token && <h1>SISTEM LOGIN</h1>}
      <>{state.token ? <Dashboard /> : <Login />}</>
    </div>
  );
};

export default App;
