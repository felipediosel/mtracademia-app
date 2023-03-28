import styled, {css} from 'styled-components/native';

export const ImageBackground = styled.ImageBackground`
  ${({theme}) => css`
    flex: 1;
    height: ${theme.responsive.hp('95%')}px;
    width: ${theme.responsive.wp('100%')}px;
  `}
`;
