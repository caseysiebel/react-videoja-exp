console.log('client.js')
import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
console.log('app from client', App)

render(
  <App/>,
  document.getElementById('app')
)
