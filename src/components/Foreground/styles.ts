import styled, {css} from 'styled-components/native';

export const ViewForeground = styled.View`
  ${({theme}) => css`
    background: ${theme.colors.bg};
    border-top-right-radius: ${theme.borders.md};
    border-top-left-radius: ${theme.borders.md};
    height: ${theme.responsive.hp('30%')}px;
    width: ${theme.responsive.wp('100%')}px;
    gap: ${theme.responsive.hp('1%')}px;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;
