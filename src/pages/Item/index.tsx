import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import sandubaImg from '../../assets/sanduba.png';

import {
  Container,
  ItemImage,
  ItemTitle,
  ItemIngredient,
  ItemPrice,
  OldPrice,
  Info,
  Details,
  Delivery,
  DeliveryTitle,
  DeliveryDelay,
  Wrapper,
  BackButton,
  LeftHeader,
  DrinkHeader,
  Message,
  SubMessage,
  DrinkItem,
  DrinkTitle,
  DrinkPrice,
  Warning,
  WarningText,
} from './styles';

interface RouteParams {
  itemId: String;
}

const Item: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { itemId } = route.params as RouteParams;

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" color="#f00" size={35} />
      </BackButton>

      <Details>
        {/* <ItemImage source={{ uri: item.offer_url }} /> */}
        <ItemImage source={sandubaImg} />
        <ItemTitle>
          {/* {item.title} */}
          {'SANDUBA COM RECEITA DE BOLO HEHE '}
        </ItemTitle>
        <ItemIngredient>
          {/* {item.ingredients} */}

          {
            '2 xícaras (chá) de açúcar 3 xícaras (chá) de farinha de trigo 4 colheres (sopa) de margarina 3 ovos 1 e 1/2 xícara (chá) de leite 1 colher (sopa) bem cheia de fermento em pó'
          }
        </ItemIngredient>
        <Info>
          <ItemPrice>
            {/* {item.newPrice} */}
            {'R$16,68'}
          </ItemPrice>
          <OldPrice>
            {/* {item.price} */}
            {'R$30,68'}
          </OldPrice>
        </Info>

        <Delivery>
          <Wrapper>
            {/* <MaterialIcons name={item.icon} size={22} color="#F00000" /> */}
            <DeliveryTitle>
              {/* {item.delivery} */}
              {'delivery'}
            </DeliveryTitle>
          </Wrapper>
          <DeliveryDelay>
            {/* {item.delay} */}
            {'20 Min'}
          </DeliveryDelay>
        </Delivery>
      </Details>

      <DrinkHeader>
        <LeftHeader>
          <Message>Escola sua bebida</Message>
          <SubMessage>Escolha 1 opção</SubMessage>
        </LeftHeader>
        <Warning>
          <WarningText>OPCIONAL</WarningText>
        </Warning>
      </DrinkHeader>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Coca-cola 2lt</DrinkTitle>
          <DrinkPrice>+ R$ 11,00</DrinkPrice>
        </LeftHeader>
        {/* <MaterialIcons name="add" size={22} color="#000" /> */}
      </DrinkItem>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Fanta uva 2lt</DrinkTitle>
          <DrinkPrice>+ R$ 11,00</DrinkPrice>
        </LeftHeader>
        {/* <MaterialIcons name="add" size={22} color="#000" /> */}
      </DrinkItem>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Suco de Maracujá 300ml</DrinkTitle>
          <DrinkPrice>+ R$ 9,50</DrinkPrice>
        </LeftHeader>
        {/* <MaterialIcons name="add" size={22} color="#000" /> */}
      </DrinkItem>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Dolly Guaraná</DrinkTitle>
          <DrinkPrice>+ R$ 10,00</DrinkPrice>
        </LeftHeader>
        {/* <MaterialIcons name="add" size={22} color="#000" /> */}
      </DrinkItem>
    </Container>
  );
};

export default Item;
