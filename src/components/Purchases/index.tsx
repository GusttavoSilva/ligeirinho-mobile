import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/Entypo';

import {
  Container,
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

interface PurchasesData {
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
      <Item key={purchases.id}>
        <Date>{purchases.date}</Date>

        <Wrapper>
          <Restaurant>
            <RestaurantImage source={{ uri: purchases.restaurant_url }} />
            <Info>
              <Name>{purchases.restaurant_name}</Name>
              <OrderNumber>Pedido entregue{purchases.order_number}</OrderNumber>
            </Info>
          </Restaurant>
          <OrderDetails>
            <Order>{purchases.order}</Order>
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
    </Container>
  );
};

export default Purchases;
