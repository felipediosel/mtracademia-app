import styled, {css} from 'styled-components/native';

export const Header = styled.View`
  ${({theme}) => css`
    flex: 1;
    background: ${theme.colors.bg};
  `}
`;

export const TabBar = styled.View`
  ${({theme}) => css`
    flex: 1;
    background: ${theme.colors.bg};
  `}
`;
