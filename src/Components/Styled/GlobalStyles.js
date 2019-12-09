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
  font-size: ${({theme}) => theme.fontSize[2]};
  margin: 2.4rem auto;
  max-width: 56rem;
}

a {
  color: ${({theme}) => theme.colours.orange.default};
  text-decoration: none;
}

ul {
  ${({theme}) => theme.padding.pl[2]}
}

h1 {
  font-size: ${({theme}) => theme.fontSize[6]}
}

h2 {
  font-size: ${({theme}) => theme.fontSize[5]}
}

h3 {
  font-size: ${({theme}) => theme.fontSize[4]}
}

h4 {
  font-size: ${({theme}) => theme.fontSize[3]}
}

h5 {
  font-size: ${({theme}) => theme.fontSize[2]}
}

h6 {
  font-size: ${({theme}) => theme.fontSize[1]}
};

`