import React, { useState } from 'react';
import { View } from 'react-native';

import {
  Container,
  Wrapper,
  Warning,
  Suggestion,
  Image,
  Message,
} from './styles';
import PrevRequests from '../PrevRequests';
const Requests: React.FC = () => {
  const [requests, setRequests] = useState(5);

  return (
    <Container>
      {requests ? (
        <PrevRequests />
      ) : (
        <Wrapper>
          <Image />
          <Warning>Nenhum pedido em andamento</Warning>
          <Message>
            <Suggestion>Que tal experimentar um lugar novo?</Suggestion>
            <Suggestion>É só selecionar Início</Suggestion>
          </Message>
        </Wrapper>
      )}
    </Container>
  );
};

// Requests.navigationOptions = {
//   title: 'ANDAMENTO',
// };

export default Requests;
