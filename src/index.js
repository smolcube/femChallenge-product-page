import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Credits from './Components/Credits';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Product/>
    <Credits/>
  </React.StrictMode>
);


