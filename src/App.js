import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Header,
  Intro,
  JobsList,
  ProjectsList,
  SkillsList,
} from './Components/';

import { GlobalStyles, theme, Separator } from './Components/Styled/'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Intro />
        <JobsList />
        <ProjectsList />
        <SkillsList />
      </ThemeProvider>
    </div>
  );
}

export default App;
