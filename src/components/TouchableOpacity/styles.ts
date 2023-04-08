import styled, {css} from 'styled-components/native';

export const TouchableOpacity = styled.TouchableOpacity`
  ${({theme}) => css`
    background: ${theme.colors.pr};
    border-radius: ${theme.borders.sm};
    margin: ${theme.margins.mh} ${theme.margins.mv};
    height: ${theme.heights.sm};
    width: ${theme.widths.sm};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `}
`;
