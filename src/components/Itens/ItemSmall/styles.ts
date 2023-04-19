import styled, {css} from 'styled-components/native';

export const ItemSmall = styled.View`
  ${({theme}) => css`
    border-radius: ${theme.borders.md};
    border-width: ${theme.borders.widths.md};
    border-color: ${theme.colors.sc};
    height: ${theme.heights.lg};
    width: 100%;
    justify-content: center;
    align-items: center;
  `}
`;
