import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from 'middleware'
import { ConfigProvider } from './inc/config'
import { updateConfig } from 'middleware/slices/config/config'

const configProps = {
  cmsUrl: 'http://localhost:8010',
  staticUrl: 'http://localhost:8015',
  webUrl: 'http://localhost:8000' // /media/ would be there with the web host url
}

store.dispatch(updateConfig(configProps))

ReactDOM.render(
  <React.StrictMode>
   </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
