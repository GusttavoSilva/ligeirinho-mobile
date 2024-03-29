import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { SuggestionData } from './index';

export const SuggestionList = styled(
  FlatList as new () => FlatList<SuggestionData>,
)`
  margin-top: 20px;
  padding-left: 5px;
`;
export const Item = styled.TouchableOpacity`
  align-items: center;
  margin-left: 15px;
`;

export const SuggestionImage = styled.Image`
  width: 100px;
  height: 50px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  margin-top: 3px;
  color: #999999;
`;
