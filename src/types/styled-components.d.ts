import theme from '../themes';

type Theme = typeof theme.dark;

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}