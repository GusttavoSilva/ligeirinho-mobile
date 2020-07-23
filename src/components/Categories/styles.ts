import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { CategoriesData } from './index';

export const Container = styled.View`
  margin: 30px 0px;
`;

export const Header = styled.View`
  margin-left: 20px;
`;

export const Title = styled.Text`
  font-size: 23px;
  font-weight: bold;
`;

export const CategoriesList = styled(
  FlatList as new () => FlatList<CategoriesData>,
)`
  margin-top: 10px;
  padding-left: 20px;
  padding: 32px 24px 16px;
`;

export const Item = styled.TouchableOpacity`
  margin-right: 15px;
  align-items: center;
`;

export const ItemImage = styled.Image`
  width: 100px;
  height: 60px;
  border-radius: 10px;
`;

export const ItemTitle = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: #999999;
`;
