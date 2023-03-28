import styled, {css} from 'styled-components/native';

export const Item = styled.View`
  ${({theme}) => css`
    flex: 1;
    border-radius: ${theme.borders.md};
    border-width: ${theme.borders.widths.md};
    border-color: ${theme.colors.sc};
    padding: ${theme.paddings.ph} ${theme.paddings.pv};
    margin: ${theme.margins.mh} ${theme.margins.mv};
    height: ${theme.heights.lg};
    gap: ${theme.responsive.hp('1%')}px;
  `}
`;
