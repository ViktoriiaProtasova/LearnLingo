import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './firebase/';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ThemeProvider theme={theme.green}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
