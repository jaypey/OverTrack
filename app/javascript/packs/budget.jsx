import React from 'react';
import ReactDOM from 'react-dom';
import BudgetMain from '../components/budget/Main';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BudgetMain {...window.InitialProps} />,
    document.getElementById('budget'),
  );
});
