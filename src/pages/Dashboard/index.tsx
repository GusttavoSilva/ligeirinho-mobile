import React from 'react';

import { Container } from './styles';

import Address from '../../components/Address';
import Input from '../../components/Input';
import Coupon from '../../components/Coupon';
import Suggestions from '../../components/Suggestions';
import Promotions from '../../components/Promotions';
import Offers from '../../components/Offers';

import Loading from '../../components/Loading';

import Categories from '../../components/Categories';
import Restaurants from '../../components/Restaurants';

import HeaderLeft from '../../components/Header/HeaderLeft';
import HeaderRight from '../../components/Header/HeaderRight';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <HeaderRight />
      <HeaderLeft />
      <Address />
      <Coupon />
      <Suggestions />
      <Promotions />
      <Offers />
      <Categories />
      <Restaurants />
    </Container>
  );
};

export default Dashboard;
