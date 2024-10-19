import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import RAGPlatform from './pages/RAGPlatform';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#14B8A6', // teal-500
    },
    secondary: {
      main: '#2DD4BF', // teal-400
    },
    background: {
      default: '#F0FDFA', // teal-50
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <h1>iMOps</h1>
        </header>
        <main>
          <RAGPlatform />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;