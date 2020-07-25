import React, { useEffect, useState, useRef } from 'react';
import { View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import { red } from '../../utils/colors';

import sandubaImg from '../../assets/sanduba.png';

import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';
import {
  Container,
  SearchBar,
  CategoriesList,
  ContainerInput,
  TextInputs,
  Title,
  Item,
  ItemImage,
  ItemTitle,
} from './styles';

export interface CategoriesData {
  id: string;
  categories: string;
  logo: string;
}

const Search: React.FC = () => {
  const searchInputRef = useRef<TextInput>(null);
  const [categories, setCategories] = useState<CategoriesData[]>([]);

  async function loadCategories() {
    try {
      const response = await api.get('/categories');
      setCategories(response.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }
  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <Container>
      <ContainerInput header>
        <Icon name="search" size={25} color="#f40000" />
        <TextInputs placeholder="Item ou Loja" />
      </ContainerInput>

      <Title>Categorias</Title>
      <CategoriesList
        // data={categories}
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
        numColumns={2}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(categories) => String(categories.id)}
        renderItem={({ item: categories }) => (
          <Item>
            {/* <ItemImage source={{ uri: item.categorie_url }} /> */}
            <ItemImage source={sandubaImg} />
            <ItemTitle>
              {/* {categories.title} */}
              {'Jonesa'}
            </ItemTitle>
          </Item>
        )}
      />
    </Container>
  );
};

export default Search;
