import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { token, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#f40000" />
      </View>
    );
  }
  // return token ? <AppRoutes /> : <AuthRoutes />;
  return <AppRoutes />;
};

export default Routes;
