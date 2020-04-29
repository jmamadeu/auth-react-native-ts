import React, { useContext } from 'react';

import { View, ActivityIndicator } from 'react-native';

import { useAuth } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return !signed ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
