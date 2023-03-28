import styled, {css} from 'styled-components/native';

export const SafeAreaView = styled.View`
  ${({theme}) => css`
    flex: 1;
  `}
`;
