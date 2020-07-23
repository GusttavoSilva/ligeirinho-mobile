import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { Container, Location, AddressButton } from './styles';

import { red } from '../../utils/colors';

const Address: React.FC = () => {
  return (
    <Container>
      <AddressButton>
        <Location>Jussara-Go, 23/06/2020</Location>
        <Icon name="chevron-down" size={20} color={red} />
      </AddressButton>
    </Container>
  );
};
export default Address;
