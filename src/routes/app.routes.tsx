import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import RestaurantDetails from '../pages/RestaurantDetails';

import Icon from 'react-native-vector-icons/Feather';

const App = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Dashboard} />
      <Tab.Screen name="Pesquisar" component={Search} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#E8E8E8' },
    }}
  >
    <App.Screen name="Inicio" component={Tabs} />

    <App.Screen name="Search" component={Search} />
    <App.Screen name="Perfil" component={Profile} />

    <App.Screen name="RestaurantDetails" component={RestaurantDetails} />
  </App.Navigator>
);

export default AppRoutes;
