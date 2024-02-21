import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './shared/styles/GlobalStyle';
import { theme } from './theme/theme';
import Layout from 'components/Layout/Layout';


function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout/>
    </ThemeProvider>
  )
}

export default App;