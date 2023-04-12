import styled, {css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({theme}) => css`
    flex: 1;
    background: ${theme.colors.bg};
  `}
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.tp};
    font-family: ${theme.fonts.fm};
    font-size: ${theme.fonts.sizes.md};
    font-weight: ${theme.fonts.weights.df};
  `}
`;

export const Item = styled.View`
  ${({theme}) => css`
    background: ${theme.colors.sc};
    border-radius: ${theme.borders.md};
    border-width: ${theme.borders.widths.md};
    border-color: ${theme.colors.sc};
    margin-top: ${theme.margins.mh};
    height: ${theme.heights.md};
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 18px;
  `}
`;

export const Item2 = styled.View`
  ${({theme}) => css`
    border-radius: ${theme.borders.md};
    border-width: ${theme.borders.widths.md};
    border-color: ${theme.colors.sc};
    height: ${theme.heights.lg};
    width: 48%;
    justify-content: center;
    align-items: center;
  `}
`;
