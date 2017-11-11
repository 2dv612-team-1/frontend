import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  (
    <Router>
      <Base />
    </Router>
  ),
  document.getElementById('react-app'),
);
