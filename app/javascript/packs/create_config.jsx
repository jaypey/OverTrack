import React from 'react';
import ReactDOM from 'react-dom';
import CreateConfig from '../components/expenses/CreateConfig';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <CreateConfig/>,
    document.getElementById('create_config'),
  );
});
