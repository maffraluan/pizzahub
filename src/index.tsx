import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import ReactDOM from 'react-dom';
import QuestionsContextProvider from './context/QuestionContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <QuestionsContextProvider>
      <App />
    </QuestionsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
