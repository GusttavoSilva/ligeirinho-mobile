import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  ResumoRestauranteContent,
  NomeRestaurante,
  NomeRestauranteText,
  InfoAdicional,
  TipoCardapioText,
  DistanciaText,
} from './styles';

interface RouteParams {
  restauranteId: String;
}

const RestaurantDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { restauranteId } = route.params as RouteParams;

  console.log(route.params);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#f40000" />
        </BackButton>
        <HeaderTitle>teste</HeaderTitle>
      </Header>

      <ResumoRestauranteContent>
        <NomeRestaurante onPress={() => {}}>
          <NomeRestauranteText>Restaurante Churrascaria</NomeRestauranteText>
          <Icon name="chevron-right" size={24} color="#f40000" />
        </NomeRestaurante>

        <InfoAdicional>
          <TipoCardapioText>Lanches *</TipoCardapioText>
          <DistanciaText> 0,8KM</DistanciaText>
        </InfoAdicional>
      </ResumoRestauranteContent>
    </Container>
  );
};

export default RestaurantDetails;
