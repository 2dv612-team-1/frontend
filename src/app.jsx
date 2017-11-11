import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import BasePage from './pages/BasePage';

render(
  <Router>
    <BasePage />
  </Router>,
  document.getElementById('app'),
);
