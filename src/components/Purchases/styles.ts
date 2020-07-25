import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { red } from '../../utils/colors';
import { FlatList } from 'react-native';
import { PurchasesData } from './index';

export const PurchasesList = styled(
  FlatList as new () => FlatList<PurchasesData>,
)`
  flex: 1;
  margin-top: 10px;
`;

export const Container = styled.View`
  flex: 1;
`;

export const Item = styled.View`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 10px;
  margin-right: 30px;
  margin-left: 30px;
`;

export const Date = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

export const Wrapper = styled.View`
  background: #fff;
  margin-top: 10px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 10px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Restaurant = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;

  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-color: #cecece;
  overflow: hidden;
`;

export const RestaurantImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Info = styled.View`
  /* margin-left: 15px; */
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 16px;
`;

export const OrderDetails = styled.View`
  padding: 5px;
  margin: 2px 0;

  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-color: #cecece;
`;

export const OrderNumber = styled.Text`
  font-size: 14px;
  color: #999999;
`;

export const Order = styled.Text`
  font-size: 16px;
  color: #999999;
`;

export const Evaluation = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;

  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-color: #cecece;
`;

export const Message = styled.Text`
  font-size: 16px;
  color: #999999;
`;

export const Star = styled.Text``;

export const Menu = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin: 10px 0;
`;

export const MenuButton = styled.TouchableOpacity`
  padding: 5px;
`;

export const MenuText = styled.Text`
  color: red;
`;
