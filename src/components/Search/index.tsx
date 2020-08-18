import React, { useState, useEffect, useRef, useCallback } from 'react';
import logoImg from '../../assets/logo.png';
import { Container, Header, Title, InputContainer } from './styles';

import api from '../../services/api';

import Input from '../Input';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

interface SearchData {
  Search: String;
}

const Search: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSearch = useCallback(async (data: SearchData) => {
    // try {
    //   const response = await api.get('/search');
    //   setCategories(response.data.data);
    // } catch (error) {
    //   console.log(error.response.data);
    // }

    console.log(data.Search);
  }, []);

  return (
    <Container>
      <Header>
        <Title>Busca</Title>
      </Header>
      <InputContainer>
        <Form ref={formRef} onSubmit={handleSearch}>
          <Input
            autoCorrect={false}
            name="Search"
            icon="search"
            placeholder="Digite o que procura"
            // returnKeyType="next"
            onSubmitEditing={() => {
              formRef.current?.submitForm();
            }}
          />
        </Form>
      </InputContainer>
    </Container>
  );
};

export default Search;
