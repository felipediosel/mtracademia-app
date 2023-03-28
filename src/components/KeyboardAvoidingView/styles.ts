import styled, {css} from 'styled-components/native';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  ${({theme}) => css`
    flex: 1;
    flex-direction: column;
    justify-content: center;
  `}
`;
