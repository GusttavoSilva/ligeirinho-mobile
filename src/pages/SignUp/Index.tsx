import React, { useRef, useCallback } from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import {
  Container,
  Title,
  BackToSignin,
  BackToSigninText,
  LogoImg,
} from './styles';

interface SignUpFormData {
  username: string;
  sobrenome: string;
  numero_celular: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const sobrenomeInputRef = useRef<TextInput>(null);
  const celularInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          username: Yup.string().required('Nome obrigatório!'),
          sobrenome: Yup.string().required('Sobrenome obrigatório!'),
          numero_celular: Yup.string().required('Celular obrigatório!'),
          email: Yup.string()
            .required('E-mail obrigatório!')
            .email('Digite um e-mail válido!'),
          password: Yup.string().min(8, 'No mínimo 8 dígitos!'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'A senha deve ser identica!',
          ),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        console.log(data);
        await api.post('/users', data);
        navigation.navigate('SignIn');

        // console.log(sobrenomeInputRef.current?.props.value)
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer seu cadastro, tente novamente.',
        );
      }
    },
    [navigation],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
        // keyboardShouldPersistTaps="handled"
        // contentContainerStyle={{ flex: 1 }}
        >
          <Form ref={formRef} onSubmit={handleSignUp}>
            <Container>
              <LogoImg source={logoImg} />
              {/* <Image source={logoImg} /> */}
              <View>
                <Title>Cadastro</Title>
              </View>

              <Input
                autoCapitalize="words"
                name="username"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  sobrenomeInputRef.current?.focus();
                }}
              />
              <Input
                ref={sobrenomeInputRef}
                autoCapitalize="words"
                name="sobrenome"
                icon="user"
                placeholder="Sobrenome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  celularInputRef.current?.focus();
                }}
              />
              <Input
                ref={celularInputRef}
                keyboardType="phone-pad"
                name="numero_celular"
                icon="phone"
                placeholder="Celular"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />

              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                name="email"
                icon="mail"
                placeholder="E-mail"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
                returnKeyType="next"
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
              />
              <Input
                ref={confirmPasswordInputRef}
                name="password_confirmation"
                icon="lock"
                placeholder="Confirma sua senha"
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
              <Button onPress={() => formRef.current?.submitForm()}>
                Cadastrar
              </Button>
            </Container>
          </Form>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignin onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#f40000" />
        <BackToSigninText>Ja tenho conta</BackToSigninText>
      </BackToSignin>
    </>
  );
};

export default SignUp;
