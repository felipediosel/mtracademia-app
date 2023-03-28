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
    border-radius: ${theme.borders.md};
    border-width: ${theme.borders.widths.md};
    border-color: ${theme.colors.sc};
    padding: ${theme.paddings.ph} ${theme.paddings.pv};
    margin: ${theme.margins.mh} ${theme.margins.mv};
    height: ${theme.heights.lg};
  `}
`;
