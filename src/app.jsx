import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  (
    <Router>
      <p>Hello World</p>
    </Router>
  ),
  document.getElementById('react-app'),
);
