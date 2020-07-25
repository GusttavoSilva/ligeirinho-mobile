import styled from 'styled-components/native';

import { Platform, FlatList } from 'react-native';
import { CategoriesData } from './index';

interface header {
  header: boolean;
}

export const ContainerInput = styled.View<header>`
  background: #eee;
  display: flex;
  height: auto;
  flex-direction: row;
  align-items: center;
  margin: ${(props) => (props.header ? '35px 20px 10px 20px ' : '20px')};

  padding-left: 10px;
  border-radius: 4px;
`;

export const TextInputs = styled.TextInput`
  flex: 1;
  padding: 15px 20px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding: 0 15px;
`;

export const SearchBar = styled.View``;

export const Title = styled.Text`
  font-size: 18px;
  color: #333;
  margin: 15px;
  font-weight: bold;
`;

export const CategoriesList = styled(
  FlatList as new () => FlatList<CategoriesData>,
)`
  flex: 1;
  margin: 0px 10px;
`;

export const Item = styled.TouchableOpacity`
  flex: 1;
  margin: 10px 5px;
`;

export const ItemImage = styled.Image`
  width: 170px;
  height: 80px;
  border-radius: 2px;
`;

export const ItemTitle = styled.Text`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
`;
