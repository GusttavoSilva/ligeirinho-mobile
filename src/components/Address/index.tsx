import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { Container, Location, AddressButton } from './styles';

import { View, StyleSheet, Text, PermissionsAndroid } from 'react-native';

import Geolocation from 'react-native-geolocation-service';

import { red } from '../../utils/colors';

import { usePermission } from '../../hooks/Permissions';
import { DataAtual } from '../../utils/formatNumber';

const Address: React.FC = () => {
  const { latitude, longitude } = usePermission();
  console.log(DataAtual());

  return (
    <Container>
      <AddressButton>
        <Location>Jussara-Go, {DataAtual()}</Location>
        <Icon name="chevron-down" size={20} color={red} />
      </AddressButton>
    </Container>
  );
};
export default Address;
