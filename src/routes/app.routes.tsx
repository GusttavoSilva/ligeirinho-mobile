import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import RestaurantDetails from '../pages/RestaurantDetails';

// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Item from '../pages/Item';
import Requests from '../pages/Requests';
import PrevRequests from '../pages/PrevRequests';

const App = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = focused
              ? // ? 'ios-information-circle'
                'home'
              : 'home-outline';
          } else if (route.name === 'Pesquisar') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Pedidos') {
            iconName = focused ? 'list' : 'ios-list-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person-sharp' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Início" component={Dashboard} />
      <Tab.Screen name="Pesquisar" component={Search} />
      <Tab.Screen name="Pedidos" component={Requests} />
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
    <App.Screen name="Pedidos" component={Requests} />
    <App.Screen name="Perfil" component={Profile} />

    <App.Screen name="RestaurantDetails" component={RestaurantDetails} />
    <App.Screen name="Item" component={Item} />

    <App.Screen name="PrevPedidos" component={PrevRequests} />
  </App.Navigator>
);

export default AppRoutes;
