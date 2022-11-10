import React from 'react';
import ReactDOM from 'react-dom';
import TasksMain from '../components/tasks/Main';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TasksMain {...window.InitialProps} />,
    document.getElementById('tasks'),
  );
});