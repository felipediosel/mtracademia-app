import styled, {css} from 'styled-components/native';

export const ViewContainer = styled.View`
  ${({theme}) => css`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.responsive.hp('1%')}px;
  `}
`;
