type State = {
  token: string | null;
  user: { username: string } | null;
  password: string;
};

type Action =
  | {
      type: 'LOGIN';
      payload: { token: string; user: any; password: string };
    }
  | {
      type: 'LOGOUT';
    };

export const initialState: State = {
  token: localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  password: localStorage.getItem('password'),
};

export const authReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        token: action.payload.token,
        user: action.payload.user,
        password: action.payload.password,
      };

    case 'LOGOUT':
      return {
        token: null,
        user: null,
        password: null,
      };

    default:
      return state;
  }
};
