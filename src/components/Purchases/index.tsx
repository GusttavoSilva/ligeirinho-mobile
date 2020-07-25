import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/Entypo';

import {
  Container,
  PurchasesList,
  Item,
  Date,
  Wrapper,
  Restaurant,
  RestaurantImage,
  Info,
  Name,
  OrderDetails,
  OrderNumber,
  Order,
  Evaluation,
  Message,
  Star,
  Menu,
  MenuButton,
  MenuText,
} from './styles';

import api from '../../services/api';

export interface PurchasesData {
  id: String;
  date: String;
  restaurant_url: String;
  restaurant_name: String;
  order_number: String;
  order: String;
}

const Purchases: React.FC = () => {
  const [purchases, setPurchases] = useState<PurchasesData[]>([]);

  async function loadPurchases() {
    try {
      const response = await api.get('/purchases');
      setPurchases(response.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    loadPurchases();
  }, []);

  return (
    <Container>
      <PurchasesList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        // data={purchases}
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={(purchases) => String(purchases.id)}
        renderItem={({ item: purchases }) => (
          <Item>
            <Date>
              {/* {purchases.date} */}
              {'29/03/2020'}
            </Date>

            <Wrapper>
              <Restaurant>
                {/* <RestaurantImage source={{ uri: purchases.restaurant_url }} /> */}

                <Info>
                  <Name>
                    {/* {purchases.restaurant_name} */}
                    {'bar do toin'}
                  </Name>
                  <OrderNumber>
                    {/* Pedido entregue{purchases.order_number} */}
                    Pedido entregue{' 760'}
                  </OrderNumber>
                </Info>
              </Restaurant>
              <OrderDetails>
                <Order>
                  {/* {purchases.order} */}
                  {'760'}
                </Order>
              </OrderDetails>
              <Evaluation>
                <Message>Avaliação do pedido</Message>
                <Star>
                  <Icon name="star" color="#ffcc33" size={20} />
                  <Icon name="star" color="#ffcc33" size={20} />
                  <Icon name="star" color="#ffcc33" size={20} />
                  <Icon name="star" color="#ffcc33" size={20} />
                  <Icon name="star" color="#ffcc33" size={20} />
                </Star>
              </Evaluation>
              <Menu>
                <MenuButton>
                  <MenuText>Ajuda</MenuText>
                </MenuButton>
                <MenuButton>
                  <MenuText>Detalhes</MenuText>
                </MenuButton>
              </Menu>
            </Wrapper>
          </Item>
        )}
      />
    </Container>
  );
};

export default Purchases;
