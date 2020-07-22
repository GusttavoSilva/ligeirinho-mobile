import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface AuthState {
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface authContextData {
  token: string;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<authContextData>({} as authContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token] = await AsyncStorage.multiGet(['@MealHunt:token']);
      if (token[1]) {
        api.defaults.headers.authorization = `MealHunt ${token[1]}`;
        setData({ token: token[1] });
      }
      setLoading(false);
    }
    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('loginapp', {
      email,
      password,
    });

    const { token } = response.data;
    await AsyncStorage.multiSet([['@MealHunt:token', token]]);

    api.defaults.headers.authorization = `MealHunt ${token}`;

    setData({ token });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@MealHunt:token']);
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token: data.token, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): authContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used winthin an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
