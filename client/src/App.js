import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
);

export default App;
