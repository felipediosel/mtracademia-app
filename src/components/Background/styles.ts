import styled, {css} from 'styled-components/native';

export const ViewBackground = styled.View`
  ${({theme}) => css`
    background: ${theme.colors.bg};
    flex: 1;
    flex-direction: column;
  `}
`;
