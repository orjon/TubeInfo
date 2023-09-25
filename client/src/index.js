import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import axios from 'axios'
// axios.defaults.baseURL = 'https://localhost:5005'
// import axios from 'axios'
// axios.defaults.baseURL = '/tuberApi'

ReactDOM.render(
  <BrowserRouter basename='/tube-info'>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
