import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { SuggestionList, Item, SuggestionImage, Title } from './styles';

export interface SuggestionData {
  id: string;
  sugg_url: string;
  title: string;
}

const Suggestions: React.FC = () => {
  const [suggestion, setSuggestion] = useState<SuggestionData[]>([]);

  // useEffect(() => {
  //   async function loadSuggestions() {
  //     const response = await api.get('suggestions');
  //     setSuggestions(response.data);
  //   }
  //   loadSuggestions();
  // }, []);

  return (
    <SuggestionList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={suggestion}
      keyExtractor={(suggestion) => String(suggestion.id)}
      // ListHeaderComponent={<RestauranteText>Restaurantes</RestauranteText>}
      renderItem={({ item: suggestion }) => (
        <Item key={suggestion.id}>
          <SuggestionImage source={{ uri: suggestion.sugg_url }} />
          <Title>{suggestion.title}</Title>
        </Item>
      )}
    />
  );
};

export default Suggestions;
