import styled, {css} from 'styled-components/native';

export const ButtonCircle = styled.View`
  ${({theme}) => css`
    background: ${theme.colors.sc};
    height: 44px;
    width: 44px;
    border-radius: 22px;
    justify-content: center;
    align-items: center;
  `}
`;

export const ButtonCirclePrimary = styled.View`
  ${({theme}) => css`
    background: ${theme.colors.pr};
    height: 44px;
    width: 44px;
    border-radius: 22px;
    justify-content: center;
    align-items: center;
  `}
`;
