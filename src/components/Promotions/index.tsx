import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  PromoList,
  Item,
  PromoImage,
  Header,
  Container,
  Title,
} from './styles';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';

export interface PromotionData {
  id: string;
  promo_url: string;
}

const Promotions: React.FC = () => {
  const { navigate } = useNavigation();

  const [promotions, setPromotions] = useState<PromotionData[]>([]);

  async function loadPromotions() {
    try {
      const response = await api.get('/promotions');
      setPromotions(response.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    loadPromotions();
  }, []);

  const navigateToTrending = useCallback(
    (promo: string) => {
      navigate('Trending', { promo });
    },
    [navigate],
  );

  return (
    <Container>
      <Header>
        <Title>Promoções</Title>
      </Header>

      <PromoList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        // data={promotions}
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(promotions) => String(promotions.id)}
        renderItem={({ item: promotions }) => (
          <Item onPress={() => navigateToTrending(promotions.id)}>
            {/* <PromoImage source={{ uri: promo.promo_url }} /> */}
            <PromoImage source={logoImg} />
          </Item>
        )}
      />
    </Container>
  );
};

export default Promotions;
