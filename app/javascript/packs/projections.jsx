import React from 'react';
import ReactDOM from 'react-dom';
import InsightsMain from '../components/projections/Main';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <InsightsMain {...window.InitialProps} />,
    document.getElementById('projections'),
  );
});
