import styled, { css } from 'styled-components/native';
import { Platform, FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 20px;
  padding-top: ${Platform.OS === 'android' ? 20 : getStatusBarHeight() + 20}px;
  background: #3333;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const HeaderTitle = styled.Text`
  margin-left: 16px;
  color: #333;
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
`;

export const ResumoRestauranteContent = styled.View`
  height: 120px;
  padding: 15px;
  background: #fff;
`;

export const NomeRestaurante = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const NomeRestauranteText = styled.Text`
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
`;

export const InfoAdicional = styled.View`
  flex-direction: row;
`;

export const TipoCardapioText = styled.Text`
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
  color: #c1c1c1;
`;

export const DistanciaText = styled.Text`
  margin-left: 5px;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
  color: #c1c1c1;
`;
