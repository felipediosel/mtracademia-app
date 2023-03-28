import styled, {css} from 'styled-components/native';

export const ViewEmailLinkHandler = styled.View`
  ${({theme}) => css`
    background: ${theme.colors.bg};
    flex: 1;
    justify-content: center;
    align-items: center;
  `}
`;
