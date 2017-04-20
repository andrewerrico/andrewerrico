import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

require('./stylesheets/main.scss');

const render = (Component) => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
};

render(App);

if (module.hot) {
  module.hot.accept(App, () => {
    render(App);
  });
}
