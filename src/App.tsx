// import 'intl';
// import 'intl/locale-data/jsonp/pt-BR';
import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import { View, StatusBar, PermissionsAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#E8E8E8" />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#E8E8E8' }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
