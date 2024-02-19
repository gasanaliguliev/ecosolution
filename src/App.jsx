import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './shared/styles/GlobalStyle';
/* import { SharedLayout } from './components/SharedLayout/SharedLayout'; */
import { theme } from './theme/theme';


function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <SharedLayout /> */}
    </ThemeProvider>
  )
}

export default App;