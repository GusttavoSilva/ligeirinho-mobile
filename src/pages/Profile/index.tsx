import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Iconion from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Person from '../../components/Header/Person';
import {
  Container,
  OptionsList,
  Option,
  Info,
  Title,
  Description,
  Wrapper,
  AdditionalMenu,
  AdditionalOption,
  OptionName,
} from './styles';
const Profile: React.FC = () => {
  return (
    <Container>
      <OptionsList>
        <Option onPress={() => {}}>
          <Icon name="bell" size={35} color="#333" />
          <Info>
            <Title>Notificações</Title>
            <Description>Minha central de notificações</Description>
          </Info>
          <Icon name="chevron-right" color="#999999" size={20} />
        </Option>
        <Option
          onPress={() => {
            /*navigation.navigate('Wallet')*/
          }}
        >
          <Iconion name="wallet-outline" size={35} color="#333" />
          <Info>
            <Title>Carteira</Title>
            <Description>Meu saldo e QR code</Description>
          </Info>
          <Icon name="chevron-right" color="#999999" size={20} />
        </Option>
        <Option onPress={() => {}}>
          <IconMaterial name="ticket-account" size={35} color="#333" />
          <Info>
            <Title>Cupons</Title>
            <Description>Meus cupons de desconto</Description>
          </Info>
          <Icon name="chevron-right" color="#999999" size={20} />
        </Option>
        <Option onPress={() => {}}>
          <Icon name="heart" size={35} color="#333" />
          <Info>
            <Title>Favoritos</Title>
            <Description>Meus locais favoritos</Description>
          </Info>
          <Icon name="chevron-right" color="#999999" size={20} />
        </Option>
        <Option onPress={() => {}}>
          <Icon name="credit-card" size={35} color="#333" />
          <Info>
            <Title>Formas de pagamento</Title>
            <Description>Minhas formas de pagamento</Description>
          </Info>
          <Icon name="chevron-right" color="#999999" size={20} />
        </Option>
        <Option onPress={() => {}}>
          <Icon name="map-pin" size={35} color="#333" />
          <Info>
            <Title>Endereços</Title>
            <Description>Meus endereços de entrega</Description>
          </Info>
          <Icon name="chevron-right" color="#999999" size={20} />
        </Option>
      </OptionsList>

      <AdditionalMenu>
        <AdditionalOption>
          <Wrapper>
            <Icon name="help-circle" size={35} color="#cecece" />
            <OptionName>Ajuda</OptionName>
          </Wrapper>
          <Icon name="chevron-right" color="#999999" size={20} />
        </AdditionalOption>
        <AdditionalOption>
          <Wrapper>
            <Icon name="settings" size={35} color="#cecece" />
            <OptionName>Configurações</OptionName>
          </Wrapper>
          <Icon name="chevron-right" color="#999999" size={20} />
        </AdditionalOption>
        <AdditionalOption>
          <Wrapper>
            <Icon name="lock" size={35} color="#cecece" />
            <OptionName>Segurança</OptionName>
          </Wrapper>
          <Icon name="chevron-right" color="#999999" size={20} />
        </AdditionalOption>
        <AdditionalOption>
          <Wrapper>
            <IconMaterial name="store-outline" size={35} color="#cecece" />
            <OptionName>Sugerir Restaurantes</OptionName>
          </Wrapper>
          <Icon name="chevron-right" color="#999999" size={20} />
        </AdditionalOption>
        <AdditionalOption>
          <Wrapper>
            <IconMaterial
              name="rocket-launch-outline"
              size={35}
              color="#cecece"
            />
            <OptionName>Seja parceiro</OptionName>
          </Wrapper>
          <Icon name="chevron-right" color="#999999" size={20} />
        </AdditionalOption>
      </AdditionalMenu>
    </Container>
  );
};

export default Profile;
