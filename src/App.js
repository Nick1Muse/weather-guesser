import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from './pages/Main/Main';

function App() {
  return (
    <Router style={{ backgroundImage: 'https://static.dw.com/image/56590211_403.jpg' }}>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
