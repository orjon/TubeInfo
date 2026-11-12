import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <BrowserRouter basename='/setoff'>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
