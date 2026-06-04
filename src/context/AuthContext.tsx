import { useReducer, useContext, createContext, type ReactNode } from 'react';
import { authReducer, initialState } from '../reducer/authReducer';

type AuthContextType = {
  state: typeof initialState;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (username: string, password: string) => {
    if (username === 'admin' && password === '123') {
      const token = 'fake-jwt-' + Date.now();

      const user = {
        username: 'admin',
      };

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('password', password);

      dispatch({
        type: 'LOGIN',
        payload: { token, user, password },
      });
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('password');

    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
};
