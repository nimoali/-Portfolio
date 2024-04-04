import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import Home from './assets/component/Homepage.jsx'
// import './assets/style/index.css'
// import Bio from './assets/component/Bio.jsx'
// import Skill from './assets/component/Skills.jsx'
import Apps from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import Header from './assets/component/Header'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <App/>
 </BrowserRouter>

  


)
