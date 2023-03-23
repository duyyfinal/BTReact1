import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from './ThemeContext'
import { StoreProvider } from './store';

//Fake comments
function emitComment(id){
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`Lesson: ${id}`,{
        detail: `Nội dung comment của lesson ${id}`
      })
    )
    
  }, 2000);
}

emitComment(1)
emitComment(2)
emitComment(3)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ThemeProvider>
      <StoreProvider>
        <App />
      </StoreProvider>    
    </ThemeProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
