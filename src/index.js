import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from "./Redux/reduxStore"

const renderEntire = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};
store.subscribe(() => {
  let state = store.getState();
  renderEntire(state);
});
renderEntire(store.getState());
reportWebVitals();

/*
  Git
git add .
git commit -m "..."
git push

git branch (проверка веток)
git branch "..." (создание ветки)
git checkout name_branch (переход на ветку)
*/