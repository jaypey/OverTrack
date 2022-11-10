import React from 'react';
import ReactDOM from 'react-dom';
import UserMain from '../components/user/Main';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <UserMain {...window.InitialProps} />,
    document.getElementById('user'),
  );
});
