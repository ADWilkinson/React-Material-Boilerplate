import React from 'react';
import Routes from './routes';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <header>
          <Navbar />
        </header>

        <main>
          <Routes />
        </main>

        <footer />
      </MuiThemeProvider>
    </div>
  );
};

export default App;
