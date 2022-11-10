import React from 'react';
import ReactDOM from 'react-dom';
import ConfigList from '../components/expenses/ConfigList';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ConfigList/>,
    document.getElementById('config_list'),
  );
});