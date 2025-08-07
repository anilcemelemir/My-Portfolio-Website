import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Router burada yok
import { ThemeProvider } from './contexts/ThemeContext';
import HomePage from './pages/HomePage';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
