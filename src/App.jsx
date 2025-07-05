// App.js
import React from 'react';
import { LanguageProvider } from './LanguageContext';
import LanguageSelector from './LanguageSelector';
import Greeting from './Greeting';
import './App.css';

const App = () => {
  return (
    <LanguageProvider>
        <h1>Language Context Example</h1>
        <LanguageSelector />
        <Greeting />
    </LanguageProvider>
  );
};

export default App;
