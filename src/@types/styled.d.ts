import 'styled-components'
import { defultTheme } from '../styles/themes/default'

type ThemeType = typeof defultTheme;

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType{}
}