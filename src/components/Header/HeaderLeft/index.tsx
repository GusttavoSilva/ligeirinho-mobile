import React from 'react';

import { Container, Button, Title } from './styles';

import { useNavigation } from '@react-navigation/native';

const HeaderLeft: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Button onPress={() => navigate('Dashboard')}>
        <Title>Entrega</Title>
      </Button>
      <Button onPress={() => {}}>
        <Title disabled>Retirada</Title>
      </Button>
    </Container>
  );
};

export default HeaderLeft;
