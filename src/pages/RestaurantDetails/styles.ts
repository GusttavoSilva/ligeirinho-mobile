import styled, { css } from 'styled-components/native';
import { Platform, FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 20px;
  padding-top: ${Platform.OS === 'android' ? 20 : getStatusBarHeight() + 20}px;
  background: #fff;

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
  padding: 20px;
  background: #f33f;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
