import React from 'react';
import { AuthProvider } from './auth';
import { PermissionProvider } from './Permissions';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <PermissionProvider>{children}</PermissionProvider>
  </AuthProvider>
);
export default AppProvider;
