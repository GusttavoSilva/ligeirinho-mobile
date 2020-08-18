import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { CategoriesData } from './index';
import Input from '../Input';

export const Container = styled.View`
  margin: 10px 0px;
`;

export const Header = styled.View`
  margin-left: 20px;
`;

export const Title = styled.Text`
  font-size: 23px;
  font-weight: bold;
`;

export const InputContainer = styled.View`
  margin: 15px 15px 0;
`;

export const CategoriesList = styled(
  FlatList as new () => FlatList<CategoriesData>,
)`
  margin-top: 10px;
  padding-left: 20px;
  padding: 8px 24px 16px;
`;

export const Item = styled.TouchableOpacity`
  margin-right: 15px;
  align-items: center;
`;

export const ItemImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const ItemTitle = styled.Text`
  font-size: 16px;
  margin-top: 2px;
  color: #999999;
`;
