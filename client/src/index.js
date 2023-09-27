import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <BrowserRouter basename='/tubeinfo'>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
