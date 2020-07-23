import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/logo.png';
import {
  Container,
  Header,
  Title,
  CategoriesList,
  Item,
  ItemImage,
  ItemTitle,
} from './styles';

import api from '../../services/api';

export interface CategoriesData {
  id: string;
  categories: string;
  logo: string;
}

const Categories: React.FC = () => {
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
      <Header>
        <Title>Categorias</Title>
      </Header>

      <CategoriesList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        // data={categories}
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(categories) => String(categories.id)}
        renderItem={({ item: categories }) => (
          <Item>
            {/* <ItemImage source={{ uri: categories.categorie_url }} /> */}
            <ItemImage source={logoImg} />
            <ItemTitle>
              {/* {categories.title} */}
              {'sanduba'}
            </ItemTitle>
          </Item>
        )}
      />
    </Container>
  );
};

export default Categories;
