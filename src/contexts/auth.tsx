import React, { createContext, useState, useEffect, useContext } from 'react';

import { AsyncStorage } from 'react-native';

import * as auth from '../services/auth';

interface IUser {
  name: string;
  email: string;
}

interface IAuthContextData {
  signed: boolean;
  token?: string;
  user: IUser | null;
  signIn(): Promise<void>;
  signOut(): void;
  loading: boolean;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoraredData() {
      const storagedUser = await AsyncStorage.getItem('@RnAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RnAuth:token');

      if (storagedToken && storagedUser) {
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }

    loadStoraredData();
  }, []);

  async function signIn() {
    setLoading(true);

    const response = await auth.signIn();

    setUser(response.user);

    AsyncStorage.setItem('@RnAuth:user', JSON.stringify(response.user));
    AsyncStorage.setItem('@RnAuth:token', response.token);
    setLoading(false);
  }

  function signOut() {
    AsyncStorage.clear(() => setUser(null));
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
