import styled, { css } from 'styled-components/native';
import { Platform, FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Restaurante } from './index';
import { RectButton } from 'react-native-gesture-handler';

interface FreteTextProps {
  isGratis: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 20px;
  padding-top: ${Platform.OS === 'android' ? 20 : getStatusBarHeight() + 20}px;
  background: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.Text`
  color: #f40000;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`;
export const UserName = styled.Text`
  color: #f40000;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
`;
export const Sair = styled.Text`
  color: #f40000;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`;

export const ProfileAvatar = styled.View``;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const ContainerListRestaurantes = styled.View`
  flex: 1;
`;

export const RestaurantesList = styled(
  FlatList as new () => FlatList<Restaurante>,
)`
  padding: 32px 24px 16px;
`;

export const RestauranteContainer = styled(RectButton)`
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #3333;
`;

export const RestauranteText = styled.Text`
  margin-bottom: 20px;
  color: #333;
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
`;

export const RestauranteLogo = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const RestauranteInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const RestauranteNome = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: #f40000;
`;

export const RestauranteDescricao = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const RestautanteDescricaoText = styled.Text`
  margin-left: 8px;
  font-size: 14px;
  color: #333;
  font-family: 'RobotoSlab-Regular';
`;

export const RestautanteDistanciaText = styled.Text`
  margin-left: 8px;
  color: #333;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
`;

export const RestauranteEntrega = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const RestautanteTempoEntregaText = styled.Text`
  margin-left: 8px;
  color: #333;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
`;

export const RestautanteValorEntregaText = styled.Text<FreteTextProps>`
  margin-left: 8px;
  color: #333;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';

  ${(props) =>
    props.isGratis &&
    css`
      color: #008000;
    `}
`;

export const TiposCardapioList = styled(
  FlatList as new () => FlatList<Restaurante>,
)``;
export const TiposCardapioContainer = styled(RectButton)`
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  margin-left: 8px;
  flex-direction: column;
  align-items: center;
  border-width: 1px;
  border-color: #3333;
`;

export const ContainerListTiposCardapio = styled.View`
  /* height: 100px; */
  flex: 1;
`;
export const TiposIcon = styled.Image``;

export const TiposCardapioText = styled.Text`
  margin-top: 8px;
  color: #333;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
`;
