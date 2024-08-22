import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Panel from './components/topPanel/panel'; // Ensure correct path with correct casing
import Ques1 from './components/firstComponent/question1';
import Ques2 from './components/secondComponent/question2';
import Ques3 from './components/thridComponent/question3';
import Ques4 from './components/fourthComponent/question4';
import Ques5 from './components/fifthComponent/question5';
import Ques6 from './components/sixthComponent/question6';
import Ques7 from './components/seventhComponent/question7';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Panel />
    <Ques1 />
    <Ques2 />
    <Ques3 />
    <Ques4 />
    <Ques5 />
    <Ques6 />
    <Ques7 />
  </React.StrictMode>
);

reportWebVitals();
