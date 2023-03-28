import styled, {css} from 'styled-components/native';

export const TextInput = styled.TextInput`
  ${({theme}) => css`
    background: ${theme.colors.sc};
    border-radius: ${theme.borders.sm};
    padding: ${theme.paddings.ph} ${theme.paddings.pv};
    height: ${theme.heights.sm};
    width: ${theme.widths.lg};
    color: ${theme.colors.tp};
    font-weight: ${theme.fonts.weights.df};
    font-family: ${theme.fonts.fm};
    font-size: ${theme.fonts.sizes.md};
  `}
`;
