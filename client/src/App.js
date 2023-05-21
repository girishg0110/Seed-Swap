import React from 'react'
import Home from './components/Home'
import SeedPage from './components/SeedPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<SeedPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App