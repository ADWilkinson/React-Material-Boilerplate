import React from 'react';
import Routes from './routes';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import GlobalStore from './contexts/global-store';

const App = () => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <GlobalStore.Provider globalStore={{}}>
          <CssBaseline />

          <header>
            <Navbar />
          </header>

          <main>
            <Routes />
          </main>

          <footer />
        </GlobalStore.Provider>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
