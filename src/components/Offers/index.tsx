import React, { useState, useEffect, useCallback } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  Info,
  Title,
  SubTitle,
  SeeMoreButton,
  SeeMoreText,
  OfferList,
  ItemInfo,
  Item,
  ItemImage,
  ItemTitle,
  ItemPrice,
  OldPrice,
  Price,
} from './styles';

export interface OffersData {
  id: String;
  offer_url: String;
  title: String;
  newPrice: String;
  price: String;
  ingredients: String;
  delivery: String;
  delay: String;
  icon: String;
}

const Offers: React.FC = () => {
  const { navigate } = useNavigation();
  const [offers, setOffers] = useState<OffersData[]>([]);

  async function loadOffers() {
    try {
      const response = await api.get('/offers');
      setOffers(response.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    loadOffers();
  }, []);

  const navigateToItem = useCallback(
    (itemId: string) => {
      navigate('Item', { itemId });
    },
    [navigate],
  );

  return (
    <Container>
      <Header>
        <Info>
          <Title>Comida boa e barata</Title>
          <SubTitle>Pratos com frete grátis</SubTitle>
        </Info>
        <SeeMoreButton onPress={() => {}}>
          <SeeMoreText>Ver mais</SeeMoreText>
        </SeeMoreButton>
      </Header>

      <OfferList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        // data={offers}
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(offers) => String(offers.id)}
        renderItem={({ item: offers }) => (
          <Item onPress={() => navigateToItem(offers.id)}>
            {/* <ItemImage source={{ uri: offers.offer_url }} /> */}
            <ItemInfo>
              <ItemTitle>
                {/* {offers.title} */}
                {'pizza'}
              </ItemTitle>
              <ItemPrice>
                <Price>
                  {/* {offers.newPrice} */}
                  {'R$12,50'}
                </Price>
                <OldPrice>
                  {/* {offers.price} */}
                  {'R$18,50'}
                </OldPrice>
                <Icon name="local-offer" size={15} color="#000" />
              </ItemPrice>
            </ItemInfo>
          </Item>
        )}
      />
    </Container>
  );
};

export default Offers;
