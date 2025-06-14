import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import CustomCursor from './components/CustomCursor.tsx'; // 👈 import your cursor
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <CustomCursor /> {/* 👈 This renders your custom cursor globally */}
      <App />
    </>
  </StrictMode>
);
