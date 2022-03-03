import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import './styles/normalize.css';
import './styles/global.css';
import { Home } from './pages';
import { Layout } from './components';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path='*' element={<h1>Page not found. </h1>} />
      </Route>
    </Routes>
  )
}

export default App;