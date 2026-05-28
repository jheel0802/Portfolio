import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      cardBg: string;
      cardBorder: string;
      cardText: string;
      subtleText: string;
    };
    fonts: {
      main: string;
    };
  }
}
