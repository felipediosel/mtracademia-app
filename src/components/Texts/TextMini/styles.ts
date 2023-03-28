import styled, {css} from 'styled-components/native';

export const TextMini = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.ts};
    font-weight: ${theme.fonts.weights.df};
    font-family: ${theme.fonts.fm};
    font-size: ${theme.fonts.sizes.mm};
    text-align: center;
    text-transform: uppercase;
  `}
`;
