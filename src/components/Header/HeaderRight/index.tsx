import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';

import { Container, Button } from './styles';
import { useNavigation } from '@react-navigation/native';

const HeaderRight: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Button onPress={() => navigate('Wallet')}>
        <Icon name="qrcode" color="#F00" size={25} />
      </Button>
    </Container>
  );
};

export default HeaderRight;
