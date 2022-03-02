import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
        <Routes path='/*'>
          <Route index element={<App/>}/>
        </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('app')
);