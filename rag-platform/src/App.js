import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import APIKey from './pages/APIKey';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasAPIKey, setHasAPIKey] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>iMOps</h1>
          </header>
          <main>
            <Routes>
              <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/api-keys" 
                element={
                  isLoggedIn 
                    ? <APIKey setHasAPIKey={setHasAPIKey} /> 
                    : <Navigate to="/login" replace />
                } 
              />
              <Route 
                path="/" 
                element={
                  isLoggedIn && hasAPIKey 
                    ? <RAGPlatform /> 
                    : <Navigate to={isLoggedIn ? "/api-keys" : "/login"} replace />
                } 
              />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;