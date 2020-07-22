import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import Icon from 'react-native-vector-icons/Feather';
import logo from '../../assets/logo.png';

import { ScrollView, ActivityIndicator, YellowBox } from 'react-native';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  UserAvatar,
  ProfileAvatar,
  Sair,
  // ListRestaurante
  RestauranteText,
  ContainerListRestaurantes,
  RestaurantesList,
  RestauranteContainer,
  RestauranteLogo,
  RestauranteInfo,
  RestauranteNome,
  RestauranteDescricao,
  RestautanteDescricaoText,
  RestautanteDistanciaText,
  RestauranteEntrega,
  RestautanteTempoEntregaText,
  RestautanteValorEntregaText,
  // ListTiposRestaurantes
  TiposCardapioList,
  TiposCardapioContainer,
  ContainerListTiposCardapio,
  TiposIcon,
  TiposCardapioText,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export interface Restaurante {
  id: string;
  username: string;
  email: string;
  logo: string;
  // informações que virão da api
}

const Dashboard: React.FC = () => {
  const { navigate } = useNavigation();
  const { signOut } = useAuth();

  const [restaurante, setRestaurante] = useState<Restaurante[]>([]);

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

  const navigateToRestauranteDetails = useCallback(
    (restauranteId: string) => {
      navigate('RestaurantDetails', { restauranteId });
    },
    [navigate],
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem Vindo!{'\n'}
          <UserName> Gustavo Gomes Silva{'\n'}</UserName>
          <Sair onPress={naviteToSignOut}>sair</Sair>
        </HeaderTitle>

        <ProfileAvatar>
          <UserAvatar source={logo} />
        </ProfileAvatar>
      </Header>
      <ScrollView keyboardShouldPersistTaps="handled">
        <ContainerListTiposCardapio>
          <TiposCardapioList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{ height: 60 }}
            data={restaurante}
            keyExtractor={(restaurante) => String(restaurante.id)}
            // ListHeaderComponent={
            //   <RestauranteText>Restaurantes</RestauranteText>
            // }
            renderItem={({ item: restaurante }) => (
              <TiposCardapioContainer onPress={() => {}}>
                {/* <RestauranteLogo source={{ uri: restaurante.logo }} /> */}
                <TiposIcon source={logo} />

                <TiposCardapioText>{'Salgados'}</TiposCardapioText>
              </TiposCardapioContainer>
            )}
          />
        </ContainerListTiposCardapio>

        <ContainerListRestaurantes>
          {restaurante && (
            <RestaurantesList
              // horizontal={true}
              showsVerticalScrollIndicator={false}
              // contentContainerStyle={{ height: 60 }}
              data={restaurante}
              keyExtractor={(restaurante) => String(restaurante.id)}
              ListHeaderComponent={
                <RestauranteText>Restaurantes</RestauranteText>
              }
              renderItem={({ item: restaurante }) => (
                <RestauranteContainer
                  onPress={() => navigateToRestauranteDetails(restaurante.id)}
                >
                  {/* <RestauranteLogo source={{ uri: restaurante.logo }} /> */}
                  <RestauranteLogo source={logo} />

                  <RestauranteInfo>
                    <RestauranteNome>{restaurante.username} </RestauranteNome>

                    <RestauranteDescricao>
                      <RestautanteDescricaoText>
                        {'Pizzas'}
                      </RestautanteDescricaoText>
                      <RestautanteDistanciaText>
                        {'12 KM'}
                      </RestautanteDistanciaText>
                    </RestauranteDescricao>

                    <RestauranteEntrega>
                      <Icon name="clock" size={14} color="#f40000" />
                      <RestautanteTempoEntregaText>
                        {'9-15 min'}
                      </RestautanteTempoEntregaText>

                      <RestautanteValorEntregaText
                        isGratis={
                          restaurante.username === 'Choperia' ? true : false
                        }
                      >
                        {'R$ 15,00'}
                        {/* {Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(restaurante.valorEntrega)} */}
                      </RestautanteValorEntregaText>
                    </RestauranteEntrega>
                  </RestauranteInfo>
                </RestauranteContainer>
              )}
            />
          )}
        </ContainerListRestaurantes>
      </ScrollView>
    </Container>
  );
};

export default Dashboard;
