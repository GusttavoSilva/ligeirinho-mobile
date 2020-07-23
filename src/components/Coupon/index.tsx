import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {
  CouponButton,
  Divisor,
  Logo,
  Content,
  CouponInfo,
  Title,
  Validity,
} from './styles';
import { red } from '../../utils/colors';

const Coupon: React.FC = () => {
  return (
    <CouponButton onPress={() => {}}>
      <Divisor>
        <Content>
          <Logo />
          <CouponInfo>
            <Title>Cupom de R$10</Title>
            <Validity>Válido até as 16:29</Validity>
          </CouponInfo>
        </Content>
        <Icon name="chevron-right" color={red} size={20} />
      </Divisor>
    </CouponButton>
  );
};

export default Coupon;
