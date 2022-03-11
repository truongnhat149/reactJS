import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function Person(props) {
  return (
    <div className="Person">
      <h1>Name : {props.name} </h1>
      <p>Age: {props.age}</p>
    </div>
  )
};

ReactDOM.render(<Person name="Thanh" age="19"/>,document.querySelector('#p1'));
    
ReactDOM.render(<Person name="tung" age="29"/>,document.querySelector('#p2'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
