import styled from 'styled-components/native';
import { PromotionData } from './index';
import { FlatList } from 'react-native';
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

export const PromoList = styled(FlatList as new () => FlatList<PromotionData>)`
  margin: 20px 0;
  padding-left: 5px;
`;

export const Item = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const PromoImage = styled.Image`
  width: 100px;
  height: 60px;
`;
