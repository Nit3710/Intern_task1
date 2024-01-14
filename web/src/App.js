import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <h1 style={{ textAlign: 'center' }}>React Form and User Data</h1>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/form' Component={Form} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
