import styled, { css } from 'styled-components/native';

import { red } from '../../../utils/colors';

interface TitleProps {
  disabled?: boolean;
}

export const Container = styled.View`
  margin-left: 10px;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Title = styled.Text<TitleProps>`
  color: #ff6666;
  font-size: 17px;

  color: ${(props) => (props.disabled ? '#999999' : `${red}`)};
`;
