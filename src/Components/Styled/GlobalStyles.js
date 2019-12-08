import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Lato:400,400i,900&display=swap');

html {
  font-size: 10px;
}

body {
  background-color: ${({theme}) => theme.colours.white.default};
  color: ${({theme}) => theme.colours.charcoal.default};
  font-family: ${({theme}) => theme.fontFamily.sansSerif};
  font-size: ${({theme}) => theme.fontSize[3]};
  margin: 0 auto;
  max-width: 48rem;
}

a {
  color: ${({theme}) => theme.colours.orange.default};
  text-decoration: none;
}

`