import React from 'react';

import { Container } from './styles';

import Purchases from '../../components/Purchases';

const PrevRequests: React.FC = () => {
  return (
    <Container>
      <Purchases />
    </Container>
  );
};
export default PrevRequests;

// PrevRequests.navigationOptions = {
//   title: 'ANTERIORES',
// };
