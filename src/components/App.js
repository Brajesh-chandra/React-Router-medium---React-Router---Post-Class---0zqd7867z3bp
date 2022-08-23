import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../AppRoutes';
import { BackgroundColorChanger } from '../Pages/BackgroundColorChanger';
import { Calculator } from '../Pages/Calculator';

import '../styles/App.css';
const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes>
      </AppRoutes>
    </BrowserRouter>
  )
}


export default App;
