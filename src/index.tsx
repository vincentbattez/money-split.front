import React from 'react';
import { render } from 'react-dom';

import 'style/App.scss'

import DashboardContainer from "pages/Dashboard";

render(
  <DashboardContainer />,
  document.getElementById('root'),
);
