import styled, {css} from 'styled-components/native';

export const TextExtraLarge = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.tp};
    font-weight: ${theme.fonts.weights.df};
    font-family: ${theme.fonts.fm};
    font-size: ${theme.fonts.sizes.xl};
    text-align: center;
    text-transform: uppercase;
  `}
`;
