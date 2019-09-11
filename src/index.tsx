import * as React from 'react';
import { render } from 'react-dom';

import './style/App.scss'

import { Dashboard } from "./pages/Dashboard/Dashboard";

render(
  <Dashboard />,
  document.getElementById('root')
);
