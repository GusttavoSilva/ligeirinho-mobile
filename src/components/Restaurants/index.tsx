import React, { useState, useEffect, useCallback } from 'react';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import Icon from 'react-native-vector-icons/Entypo';
import logoImg from '../../assets/logo.png';

import { YellowBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  Title,
  RestaurantList,
  Item,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemDescription,
  Star,
  Categories,
  Distance,
  Delay,
} from './styles';

export interface RestauranteData {
  id: string;
  title: string;
  star: string;
  categories: string;
  restaurant_logo: string;
  distance: string;
  delay: string;
}

const Restaurants: React.FC = () => {
  const { navigate } = useNavigation();
  const { signOut } = useAuth();

  const [restaurante, setRestaurante] = useState<RestauranteData[]>([]);

  async function getRestaurantes() {
    try {
      const response = await api.get('/clientes', {
        headers: {
          latitude: -15.867846,
          longitude: -50.8542468,
        },
      });
      setRestaurante(response.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    YellowBox.ignoreWarnings([
      'VirtualizedLists should never be nested', // TODO: Remove when fixed
    ]);
    getRestaurantes();
  }, []);

  const naviteToSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  // const navigateToRestauranteDetails = useCallback(
  //   (restauranteId: string) => {
  //     navigate('RestaurantDetails', { restauranteId });
  //   },
  //   [navigate],
  // );

  return (
    <Container>
      <Header
        // display={display}>
        display={true}
      >
        <Title>
          {/* {title} */}
          Restaurantes
        </Title>
      </Header>

      {restaurante && (
        <RestaurantList
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          data={restaurante}
          keyExtractor={(restaurante) => String(restaurante.id)}
          renderItem={({ item: restaurante }) => (
            <Item onPress={() => {}}>
              {/* <ItemImage source={{ uri: restaurante.restaurant_logo }} /> */}
              <ItemImage source={logoImg} />
              <ItemInfo>
                <ItemTitle>
                  {/* {restaurante.title} */}
                  {'Gustavo gomes silva'}
                </ItemTitle>
                <ItemDescription>
                  <Icon name="star" size={20} color="#ff7b00" />
                  <Star>{restaurante.star ? restaurante.star : 'Novo!'} </Star>
                  <Categories>
                    {/* {restaurante.categories} */}
                    {' pizzas'}
                  </Categories>
                  <Distance>
                    {/* {restaurante.distance} */}
                    {'15 KM'}
                  </Distance>
                </ItemDescription>
                <Delay>
                  {/* {restaurante.delay} */}
                  {'15-30 Min'}
                </Delay>
              </ItemInfo>
            </Item>
          )}
        />
      )}
    </Container>
  );
};
export default Restaurants;
