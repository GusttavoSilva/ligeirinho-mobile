import React from 'react';
import { ActivityIndicatorProps } from 'react-native';

import { LoadingCircle, Container } from './styles';

const Loading: React.FC = () => (
  <Container>
    <LoadingCircle size={400} color="#f40000" />;
  </Container>
);

export default Loading;
