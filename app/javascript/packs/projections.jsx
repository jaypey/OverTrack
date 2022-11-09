import React from 'react';
import ReactDOM from 'react-dom';
import ProjectionsMain from '../components/projections/Main';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ProjectionsMain {...window.InitialProps} />,
    document.getElementById('projections'),
  );
});
