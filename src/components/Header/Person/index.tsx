import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/feather';

import {
  Container,
  Avatar,
  Info,
  Name,
  Message,
  ProfileButton,
} from './styles';

interface ProfileData {
  avatar_url: string;
  nome: string;
}

import api from '../../../services/api';
const Person: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData[]>([]);

  async function loadProfile() {
    try {
      const response = await api.get('/profile');
      setProfile(response.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }
  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <Container>
      <ProfileButton>
        {/* <Avatar source={{ uri: profile.avatar_url }} /> */}
        <Info>
          <Name>
            {/* {profile.nome} */}
            {'Gustavo Gomes Silva'}
          </Name>
          <Message>Editar perfil</Message>
        </Info>
        <Icon name="chevron-right" size={20} color="#999999" />
      </ProfileButton>
    </Container>
  );
};

export default Person;
