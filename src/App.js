import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage'; 
import ProductsPage from './components/ProductsPage'; 

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/productspage" element={<ProductsPage />} /> {/* Add route for ProductPage */}
      {/* Other routes here */}
    </Routes>
  </Router>
);

export default App;