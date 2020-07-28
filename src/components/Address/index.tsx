import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { Container, Location, AddressButton } from './styles';

import { View, StyleSheet, Text, PermissionsAndroid } from 'react-native';

import Geolocation from 'react-native-geolocation-service';

import { red } from '../../utils/colors';

import { usePermission } from '../../hooks/Permissions';

const Address: React.FC = () => {
  const {
    geolocationPermission,
    coordinatesUser,
    latitude,
    longitude,
  } = usePermission();

  useEffect(() => {
    geolocationPermission();
    coordinatesUser();
  }, []);

  return (
    <Container>
      <AddressButton>
        <Location>
          Jussara-Go, 23/06/2020{latitude}
          {longitude}
        </Location>
        <Icon name="chevron-down" size={20} color={red} />
      </AddressButton>
    </Container>
  );
};
export default Address;
