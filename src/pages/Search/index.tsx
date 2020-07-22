import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Search: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text onPress={() => navigation.goBack()}>pesquisar</Text>
    </View>
  );
};

export default Search;
